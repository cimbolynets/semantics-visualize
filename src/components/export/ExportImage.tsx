import { toPng } from "html-to-image";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { SequenceBody } from "../output/SequenceBody";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

interface ExportImageProps {
  sequence: string[];
}

export const ExportImage: FC<ExportImageProps> = ({ sequence }) => {
  // width of the export image, that can be changed with a slider
  const [width, setWidth] = useState(0);
  const seqRef = useRef(null);

  useEffect(() => {
    // initial width
    setWidth(document.body.clientWidth - 64);
  }, []);
  // creating canvas element from the dom element that contains visualization, then creating a link and triggering it to
  // show the download dialog
  const toImage = (sequence: HTMLDivElement | null) => {
    if (!sequence) return;
    toPng(sequence, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "sequence.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const memoizedSequence = useMemo(() => sequence, [sequence.join("")]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4 mx-auto w-full max-w-96">
        <Button variant="secondary" onClick={() => toImage(seqRef.current)}>
          Download PNG
        </Button>
        <Slider
          color="secondary"
          value={[width]}
          onValueChange={(values) => setWidth(values[0])}
          min={1}
          max={document.getElementsByTagName("body")[0].clientWidth - 64}
        />
      </div>
      <div
        ref={seqRef}
        style={{ width: width ?? "80%" }}
        className="rounded-xl mx-auto bg-background"
      >
        <SequenceBody sequence={memoizedSequence} className="!overflow-hidden p-4" />
      </div>
    </div>
  );
};
