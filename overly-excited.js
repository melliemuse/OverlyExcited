
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuation) {
    let buildMeUp = []

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.         */

        if ((buildMeUp.length + 1) % 3 === 0) {
            buildMeUp.push(`${theWordArray[i]}${punctuation} `);
            console.log(buildMeUp.length);
           
        }

        // Otherwise, just concatenate the word itself.
        else {
            buildMeUp.push(`${theWordArray[i]} `);
            console.log(buildMeUp.length);
        }


    // Print buildMeUp to the console
    console.log(buildMeUp.join(''))
    }

}


// Invoke the function and pass in the array
addExcitement(sentence, '?')


