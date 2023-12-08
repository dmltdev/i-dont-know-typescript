namespace TypeofNarrowing {
  let greet: string | number = "hello";

  if (typeof greet === "string") {
    console.log("greet is a string");
  } else {
    console.log("greet is a number");
  }
}
