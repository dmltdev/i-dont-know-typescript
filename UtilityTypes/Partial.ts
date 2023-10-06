/* 
The Partial type in TypeScript allows you to make all properties of a type optional. 
This is useful when you need to create an object with only a subset of the properties of an existing type.
*/
namespace PartialType {
  interface User {
    name: string;
    age: number;
    email: string;
  }
  
  function createUser(user: Partial<User>): User {
    return {
      name: "John Doe",
      age: 30,
      email: "john.doe@gmail.com",
      ...user,
    };
  }
  const newUser = createUser({name: "Jane O'Neill"});
  
  console.log(newUser); 
}