function calculateSum() {
    const numbers = [1, 3, 5, 8];
    const sum = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
    console.log("the sum is: ", sum);
}
function findLargestSmallest() {
    const numbers = [1, 4, 67, 78, 123, 23, 34];
    var minNo = numbers[0];
    var maxNo = numbers[0];
    for (const n of numbers) {
        if (n > maxNo) {
            maxNo = n;
        }
        else if (n < minNo) {
            minNo = n;
        }
    }
    console.log("the max no is: ", maxNo);
    console.log("the min no is: ", minNo);

}
function reverseString() {
    var testStr = "morning";
    var reverseStr = testStr.split('').reverse().join('')
    console.log("the reversed string is: ", reverseStr);
}
function reverseSentence() {
    var testSen = "Good day to all of you!";
    var reverseSen = testSen.split(' ').reverse().join(' ')
    console.log("the reversed string is: ", reverseSen);
}
function reverseSentenceAndWord() {
    var testSen = "My name is Khan";
    var testeSen2 = testSen.split(' ')
    var senArray = [];
    for (var w of testeSen2) {
        var word = w.split('').reverse().join('');
        senArray.push(word);
    }
    var newSen = senArray.join(' ');
    var revSen = newSen.split(' ').reverse().join(' ');
    console.log("the reversed sentence is: ", revSen);
}
function checkPalindrome() {
    var testStr = "Malayalam";
    charArray = testStr.split('');
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] = charArray[charArray.length - 1]) {
            console.log("the string is palindrome", testStr);
            break;
        }
    }

}
function sortNumbers() {
    var numArray = [1, 12, 98, 34, 87, 14, 35, 47, 86, 64, 100, 204, 246];
    var ascArray = [...numArray];
    var descArray = [...numArray];
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length - i - 1; j++) {
            if (ascArray[j] > ascArray[j + 1]) {
                let temp = ascArray[j];
                ascArray[j] = ascArray[j + 1];
                ascArray[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length - i - 1; j++) {
            if (descArray[j] < descArray[j+1]) {
                let temp = descArray[j];
                descArray[j] = descArray[j + 1];
                descArray[j + 1] = temp;
            }
        }
    }
    console.log("the sorted asc array is:", ascArray);
    console.log("the sorted desc array is:", descArray);
}
calculateSum();
findLargestSmallest();
reverseString();
reverseSentence();
reverseSentenceAndWord();
checkPalindrome();
sortNumbers();