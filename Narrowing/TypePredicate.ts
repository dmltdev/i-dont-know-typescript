/* 
Type predicates are functions that return a boolean value. 
They are used to narrow the type of a variable. 
Type predicates are used in type guards.

+ Type predicate functions provide a way to express 
complex type relationships in a readable and understandable way.
+ They allow to define custom functions that not only perform a specific task 
but also return a boolean value that tells TypeScript 
whether a variable is of a particular type.
+ They make code more expressive and self-documenting.
+ They can be useful to perform dynamic type checks on an object.

- Can be more difficult to set up and use than conditional blocks. 
They require you to define custom functions and may require more code to get up and running.
- It is easy to write incorrect predicates leading to unexpected or undesired type narrowing,
resulting in errors or unexpected behavior, which can be difficult to diagnose and fix.

Best practices for using type predicate functions for type narrowing:
- Define them carefully and ensure they are properly typed.
- Use clear and descriptive names for Type Predicate Functions.
- Use them only when they are appropriate and necessary.
- Consider alternative approaches to type narrowing, such as conditional blocks or discriminated unions.
- Use automated testing and code analysis tools to detect potential errors or inconsistencies in the program.
*/

function isString(x: unknown): x is string {
  return typeof x === "string";
}

function reverseString(x: unknown) {
  if (isString(x)) {
    return x.split("").reverse().join("");
  }
  return null;
}
