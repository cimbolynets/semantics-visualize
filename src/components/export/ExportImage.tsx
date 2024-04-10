import html2canvas from "html2canvas";
import { Image } from "lucide-react";
import { FC, useRef, useState } from "react";
import { SequenceBody } from "../output/SequenceBody";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import "./export.css";

interface ExportImageProps {
  sequence: string[];
}

export const ExportImage: FC<ExportImageProps> = ({ sequence }) => {
  const sequenceRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const downloadImage = () => {
    const sequence = sequenceRef.current;
    if (!sequence) return;
    setOpen(true);
    html2canvas(sequence).then((canvas) => {
      canvas.style.display = "none";
      const image = canvas.toDataURL("png");
      const a = document.createElement("a");
      a.setAttribute("download", "sequence.png");
      a.setAttribute("href", image);
      a.click();
      setOpen(false);
    });
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button variant="secondary" onClick={downloadImage} className="gap-2">
            Download PNG <Image />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Image's being generated, please wait.</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div
        ref={sequenceRef}
        className="z-50 bg-background p-4 rounded-xl top-0 left-[10000%] absolute overflow-initial"
      >
        <SequenceBody sequence={sequence} className="export-math-renderer" />
      </div>
    </>
  );
};
