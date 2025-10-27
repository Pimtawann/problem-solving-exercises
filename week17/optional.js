function findLongestWord(text) {
    let words = text.split(" ")
    let longestWord = "";

    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    } return longestWord;
 };
 
 let result1 = findLongestWord("I love programming very much");
 console.log(result1); // "programming"
 
 let result2 = findLongestWord("TechUp helps people switch careers");
 console.log(result2); // "careers"