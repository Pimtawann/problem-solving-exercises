function countVowels(text) {
    let count = 0
    let result = text.split("")
    for (let i=0; i<result.length; i++){
        let stringLower = result[i].toLowerCase();
        if (stringLower === 'a' || stringLower === 'e' || stringLower === 'i' || stringLower === 'o' || stringLower === 'u'){
            count ++
        }
    } return count;
}

 let result1 = countVowels("hello");
 console.log(result1); // 2
 
 let result2 = countVowels("TECHUP");
 console.log(result2); // 2