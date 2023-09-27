/* 
The instanceof operator is a way to narrow down the type of a variable. It is used to check if an object is an instance of a class.
*/

type BirdType = {
  name: string;
  fly: () => string;
  layEggs: () => string;
};

type DeerType = {
  name: string;
  walk: () => string;
  run: () => string;
};

class Bird implements BirdType {
  constructor (name: string) {
    this.name = name;
  }
  name: string;
  fly() {
    return "flying...";
  }
  layEggs() {
    return "laying eggs...";
  }
}

class Deer implements DeerType {
  constructor (name: string) {
    this.name = name;
  }
  name: string;
  walk() {
    return "walking...";
  }
  run() {
    return "running...";
  }
}

const eagle = new Bird("Eagle");
const deer = new Deer("Deer");

// instanceof
function instanceOfBird(obj: Bird | Deer): string {
  return obj instanceof Bird ? obj.fly() : obj.walk();
}

instanceOfBird(eagle); //?
instanceOfBird(deer); //?
