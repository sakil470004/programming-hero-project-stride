// Access object - Nested Object , Optional Chaining

// give me highly nested object
const user = {
  name: "Sakil",
  age: 25,
  email: "mynul.sakil@gmail.com",
  city: "Dhaka",
  address: {
    street: "123 Main St",
    zipcode: "12345",
    country: "Bangladesh",
  },
  hobbies: ["movies", "music"],
  familyMembers: [
    {
      name: "Mr. X",
      age: 50,
    },
    {
      name: "Mrs. Y",
      age: 45,
    },
  ],
};
const street = user?.address?.street;
console.log("street", street);

const hobbies = user?.hobbies;
console.log("hobbies", hobbies);
const familyMembersMRXName = user?.familyMembers[0].name;
console.log("familyMembersMRXName", familyMembersMRXName);
// print all members info
const familyMembers = user?.familyMembers;
familyMembers?.forEach((member) => {
 const {name,age}=member;
    console.log("name", name);
    console.log("age", age);
});