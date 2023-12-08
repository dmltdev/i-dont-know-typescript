namespace FunctionTypes {
  // Function declaration with types
  function add(a: number, b: number): number {
    return a + b;
  }

  // Arrow function with types
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  // Function type
  let divide: (a: number, b: number) => number;

  divide = (a, b) => {
    return a / b;
  };
}
