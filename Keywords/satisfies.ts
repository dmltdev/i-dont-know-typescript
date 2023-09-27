/* 
A type "satisfies" an interface if it has all the properties and methods defined by that interface
*/

// 3 Example
type personInfo = personName | otherDetails;

type personName = "John" | "Jack" | "Justin";

type otherDetails = {
  id: number;
  age: number;
};

type Person2 = {
    myInfo: personInfo;
    myOtherInfo: personInfo;
  };

const applicant = {
    myInfo: "John",
    myOtherInfo: { id: 123, age: 22 },
  } satisfies Person2;

applicant.myInfo.toUpperCase();

// 2 Example
interface Person {
  name: string;
  age: number;
}

function printPersonInfo(person: Person) {
  return `Name: ${person.name}, Age: ${person.age}`;
}

const john = { name: "John", age: 30, gender: "male" };

printPersonInfo(john); //?

// 3 Example

type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<string, string | RGB>;

// Information about each property is still maintained.
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();