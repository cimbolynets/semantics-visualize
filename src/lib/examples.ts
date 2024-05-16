export const skipWhileInnerIf = `skip; i := 1; x := 3;
while !(x = 1) do (
    i := i*x;
    x := x-1;
    while i <= 4 do i := i + 1
); x := 4`;

export const swapVariablesJane = `x := x+y;
y := x-y;
x := x-y`;

export const findMiddleValue = `a := x - y;
b := y - z;
c := x - z;
if (0 <= a * b) then
  med := y
else if (0 <= a * c) then
  med := z
else
  med := x`

export const factorialJane = `x := 1; 
y := 3; 
while !(y = 1) do (
    x := x*y; 
    y := y - 1
)`;

export const factorialProc = `n := 2;
result := 1;
begin 
  proc factorial is (
    if 1 <= n then (
        result := result*n;
        n := n - 1;
        call factorial
    ) else skip
  ); 
  (
    call factorial
  ) 
end`;

export const withBlock = `
x := 1;
y := 2;
begin var x := 3, z := 3;
  (x := 4;
  y := x + 2)
end;
if x <= y then x := y else skip
`;

export const withDynamicProcedureScope = `
begin var x := 1; proc addOne is x := x + 1;
  call addOne
end
`;

export const blocksAndProcedures = `begin var x := 0;
  proc p is x := x * 2,
  proc q is call p; (
    begin var x := 3; proc p is x := x + 1; (
      call q; 
      y := x 
    ) end;
    y := 2
  )
end`;

export const abstractMachineFactorial = `LOOP(
    FETCH-y:PUSH-1:EQ:NEG,
    FETCH-x:FETCH-y:MULT:STORE-x:PUSH-1:FETCH-y:SUB:STORE-y
):TRUE:BRANCH(
    PUSH-1,
    PUSH-2
)`;

export const abstractMachineFibonacci = `LOOP(
  FETCH-length:PUSH-1:LE,FETCH-current:FETCH-prev:ADD:STORE-fibNumber:
  FETCH-prev:FETCH-current:STORE-prev:
  FETCH-current:ADD:STORE-current:
  PUSH-1:FETCH-length:SUB:STORE-length
)`;
