
// SOLUTION 1
// Use split, reverse and join methods
function reverseStr(str){
    const strArr = str.split('')
    const reversedArr = strArr.reverse()
    const reversedStr = reversedArr.join('')
    console.log(reversedStr)
}

// simon // s i m o n

reverseStr("simon")
// nomis


// SOLUTION 2
// using for loop 1
function reverseStr2(str){
    let reverdStr=''

    for (let i=0; i<str.length; i++){
        reverdStr = str[i] + reverdStr
    }
}

reverseStr2("clear fields")

// SOLUTION 3
// using for loop 2
function reverseStr3(str){
    let reverdStr = ''

    for (let i=str.length-1; i>=0; i--){
        reverdStr += str[i]
    }
    console.log(reverdStr)
    return reverdStr
}

reverseStr3("programming")

