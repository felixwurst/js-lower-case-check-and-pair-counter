
document.write('Exercise 1:<br>')

// Exercise 1:
// Write a JavaScript function to check whether a given string contains only small letters?

let str = "this is a test!"
let str2 = "tHiS iS A tEsT!"

function lowerCaseCheck(str) {
    if (str == str.toLowerCase()) {
        return true
    }
    if (str != str.toLowerCase()) {
        return false
    }
}
document.write('Does "' + str + '" only contain small letters? ' + lowerCaseCheck(str) + '<br>')
document.write('Does "' + str2 + '" only contain small letters? ' + lowerCaseCheck(str2) + '<br>')



document.write('<br>Exercise 2:<br>')

// Exercise 2:
// Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array
// For example - The output of [1, 3, 2] -> 3 - (1,3), (1,2), (3,2)
// The output of [2, 4, 6] -> 3 - (2,4), (2,6), (4,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
// The output of [5,9,2,1] -> 6 - (5,9), (5,2), (5,1), (9,2), (9,1), (2,1)
// The output of [2,2,9,9] -> 3 - (2,2), (2,9), (9,9)

let arr1 = [1, 3, 2]
let arr2 = [2, 4, 6]
let arr3 = [2, 4, 16]
let arr4 = [5,9,2,1]
let arr5 = [2,2,9,9]

function pairCounter(arr) {
    let storage = []
    for (let x = 0; x < arr.length - 1; x++) {
        for (let i = x + 1; i < arr.length; i++) {
            // generates a new pair of numbers which are inside the given array
            let item = "(" + arr[x].toString() + "," + arr[i].toString() + ")"
            document.write("new pair: " + item + "<br>")
            // if the pair is not inside the storage yet it will push
            if (storage.indexOf(item) == -1) {
                storage.push(item)
                document.write("storage: " + storage + "<br><br>")
            }
        }
    }
    document.write("result => " + storage.length + " pairs: " + storage + "<br>")
}
pairCounter(arr5)