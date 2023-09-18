/* 
void represents the return value of functions which don’t return a value. 
It’s the inferred type any time a function doesn’t have any return statements, 
or doesn’t return any explicit value from those return statements:
*/

function sortArr(a: number[]): void {
  a.sort((a, b) => a - b);
}
