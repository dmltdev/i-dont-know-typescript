/* 
With strictNullChecks on, when a value is null or undefined, 
you will need to test for those values before using methods or properties on that value. 

Just like checking for undefined before using an optional property, 
we can use narrowing to check for values that might be null:
*/

function doSomething(name: string | null) {
  if (name !== null) {
    console.log(`Hello, ${name}`);
  }
}
