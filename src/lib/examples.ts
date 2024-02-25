export const skipWhileInnerIf = `skip; i := 1;
while !(x = 1) do (
    i := i*x;
    x := x-1;
    if i <= 4 then i := i + 1 else skip
); x := 4`;

export const withBlock = `
x := 1;
y := 2;
begin var x := 3, z := 3;
  (x := 4;
  y := x + 2)
end;
if x <= y then x := y else skip
`;
