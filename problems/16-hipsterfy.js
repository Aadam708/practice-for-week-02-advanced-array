/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
    let word_arr = word.split("")

    let vowels = "aeiou".split("")

    for(let i = word_arr.length-1; i>=0; i--){

        if (vowels.includes(word_arr[i])){
            word_arr.splice(i,1)
            break
        }
    }

    return word_arr.join("")

};

let hipsterfy = function(sentence) {
    // Your code here
    let words = sentence.split(" ")

    let new_sentence = words.map(function (word) {

        return removeLastVowel(word)
    })
    return new_sentence.join(" ")
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
