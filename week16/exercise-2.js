function getAdults(people) {
    return people.filter((people)=> people.age >= 18).map((people) => people.name)
 };
 
 let result1 = getAdults([
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
 ]);
 console.log(result1); // ["Alice", "Charlie"]