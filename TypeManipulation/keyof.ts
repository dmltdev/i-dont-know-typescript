/* 
The keyof operator in TypeScript is used to get the union of keys from an object type.
*/

interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User;
let key: UserKeys = "name";
key = "age";
key = "location";
// key = "boolean"; // Type "boolean" is not assignable to type "keyof User"

type Point = { x: number; y: number };
type P = keyof Point;

let value: P = "x";
value = "y";
// value = "number"; // Type "number" is not assignable to type "keyof Point"

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

let a:A = 5;
a = 10;
// a = "b" // Type "string" is not assignable to type "number"

type Mapish = { [k: string]: boolean};
type M = keyof Mapish;

let m:M = "string";
m = "mapish";
// m = true; // Type "string" is not assignable to type "string | number"