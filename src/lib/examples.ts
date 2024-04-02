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
PUSH-1:STORE-x:PUSH-3:STORE-y:LOOP(FETCH-y:PUSH-1:EQ:NEG,FETCH-x:FETCH-y:MULT:STORE-x:PUSH-1:FETCH-y:SUB:STORE-y)
`;
