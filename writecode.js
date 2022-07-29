// This function as written is O(n^2) time complexity
function sumZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

let emptyArray = [];
let incomparableArray = [1]
let falseArray = [1,2]
let trueArray = [-1,1,2,3]

console.log(sumZero(emptyArray))
console.log(sumZero(incomparableArray))
console.log(sumZero(falseArray))
console.log(sumZero(trueArray))

// This function as written is O(n) time complexity
function uniqueChars(word) {
    let objectOfLetters = {}
    let wordArray = [...word]
    let flag = true
    wordArray.forEach(element => {
        objectOfLetters[element] = 0;
    });
    wordArray.forEach(element => {
        objectOfLetters[element]++;
        if (objectOfLetters[element] > 1) {
            flag = false;
        }
    });
    console.log(objectOfLetters)
    return flag;
}

let uniqueTrue = 'monday';
let uniqueFalse = 'moonday';

console.log(uniqueChars(uniqueTrue))
console.log(uniqueChars(uniqueFalse))


// This function as written is O(n) time complexity
function isPangram(string) {
    let objectOfLetters = {
        a : 0,
        b : 0,
        c : 0,
        d : 0,
        e : 0,
        f : 0,
        g : 0,
        h : 0,
        i : 0,
        j : 0,
        k : 0,
        l : 0,
        m : 0,
        n : 0,
        o : 0,
        p : 0,
        q : 0,
        r : 0,
        s : 0,
        t : 0,
        u : 0,
        v : 0,
        w : 0,
        x : 0,
        y : 0,
        z : 0,
    }
    let flag = true;
    let stringArray = [...string.toLowerCase()]
    stringArray.forEach(element => {
        objectOfLetters[element]++;
    });
    for (let i = 0; i < stringArray.length; i++) {
        if (objectOfLetters[i] === 0) {
            flag = false;
        }
    }
    return flag;
}

let pangramTrue = "The quick brown fox jumps over the lazy dog!"
let pangramFalse = "I like cats, but not mice"

console.log(isPangram(pangramTrue))
console.log(isPangram(pangramFalse))

// hmm. I've given up for now. sorry. Alec, let me know what I could have done to fix it.

// This function as written is O(n^2) time complexity
function longestWord(array) {
    let placeholder = ''
    let size = 0
    array.forEach(element => {
        let storage = [...element]
        let counter = 0
        for (let i = 0; i < storage.length; i++) {
            counter++;
            if (counter > size) {
                size = counter;
                placeholder = element;
            }
        }
    });
    return size + '\n' + placeholder;
}

let arrayOfStrings = ["hi", "hello"]

console.log(longestWord(arrayOfStrings))