export const skipWhileInnerIf = `skip; i := 1;
while !(x = 1) do (
    i := i*x;
    x := x-1;
    if i <= 4 then i := i + 1 else skip
); x := 4`;