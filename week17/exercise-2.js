function removeDuplicates(arr) {
    let result = []
    let array = arr.sort()

    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i+1]) {
            result.push(array[i])
        }
    } return result
 };
 
 let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
 console.log(result1); // [1, 2, 3]
 
 let result2 = removeDuplicates([5, 5, 5, 5]);
 console.log(result2); // [5]