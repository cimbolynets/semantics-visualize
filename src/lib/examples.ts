export const skipWhileInnerIf = `skip; i := 1; x := 3;
while !(x = 1) do (
    i := i*x;
    x := x-1;
    while i <= 4 do i := i + 1
); x := 4`;

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
end`

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
end;
x := 5;
y := 6;
if x <= y then x := y else y := x`;

// export const abstractionMachineFactorial = `
// PUSH-2:PUSH-10:SUB:STORE-y
// `;

// export const abstractionMachineFactorial = `
// PUSH-10:STORE-y:PUSH-5:FETCH-y:SUB:STORE-x:FETCH-y:FETCH-x:LE:BRANCH(PUSH-3:FETCH-x:ADD:STORE-x:FETCH-x:FETCH-y:SUB:STORE-y,EMPTYOP)
// `;

export const abstractionMachineFactorial = `
LOOP(FETCH-y:PUSH-1:EQ:NEG,FETCH-x:FETCH-y:MULT:STORE-x:PUSH-1:FETCH-y:SUB:STORE-y):TRUE:BRANCH(PUSH-1,PUSH-2):STORE-z
`;
