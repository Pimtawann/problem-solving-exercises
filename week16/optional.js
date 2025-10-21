function groupBy(items, property) {
    const fruitResult = items.filter((item) => item.type === "fruit")
    const vegetableResult = items.filter((item) => item.type === "vegetable")
    
    return { fruit: fruitResult, vegetable: vegetableResult }
  }
 
 let result1 = groupBy([
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" }
 ], "type");
 
 console.log(result1);
 // {
 //   fruit: [
 //     { name: "Apple", type: "fruit" },
 //     { name: "Banana", type: "fruit" }
 //   ],
 //   vegetable: [
 //     { name: "Broccoli", type: "vegetable" }
 //   ]
 // }