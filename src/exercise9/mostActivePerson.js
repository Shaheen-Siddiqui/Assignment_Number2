// 9. Write an ES6 function that takes an array  of objects with name, role, and array of hours which represents the time the person spends on the server each day. Find the person who is the most active in the community and spends most of the time in it.

export const mostActivePerson = (arr) => {
  let containerObject = null;
  let initialSum = 0;
  arr.forEach((item) => {
    const maxReducedValue = item.hours.reduce((acc, item) => (acc += item));
    if (initialSum < maxReducedValue) {
      initialSum = maxReducedValue;
      containerObject = item;
    }
  });
  return containerObject;
};

const neogCommunity = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }
];

console.log(mostActivePerson(neogCommunity));
// Output: { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] }
