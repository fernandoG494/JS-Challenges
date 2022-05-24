// function permutationLetters (letters) {
//     let total;
//     for (let i = 1; i <= letters.length; i++) {
//         if(total === undefined){
//             total = i;
//             continue;
//         }
//         total *= i;
//     }
//     return total;
// }

/**
 * Recursive function
 */
function permutationLetters(letters){
    if (letters.length === 1){
        return 1;
    }
    return letters.length * permutationLetters(letters.slice(1));
}

console.log(permutationLetters("hello"));