const fs = require('fs')

class Utility {
    static numberStrings = [
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ]

    static findNumInString(s, findMin=true) {
        let string = findMin ? s : this.reverseString(s)
        let output = {value: 0, index: 0}
        let index
        
        for(let i = 1; i < 10; i++) {
            let numberString = findMin ? this.numberStrings[i-1] : this.reverseString(this.numberStrings[i-1])

            let stringIndex = string.indexOf(numberString)
            let intIndex = string.indexOf(i)
            let temp

            if(stringIndex < 0 && intIndex < 0) { continue }

            if(stringIndex > -1 && intIndex > -1) {
                temp = {
                    value: i,
                    index: stringIndex < intIndex ? stringIndex : intIndex
                }
            } else {
                temp = {
                    value: i,
                    index: stringIndex > -1 ? stringIndex : intIndex
                }
            }

            if(index == undefined) {
                output = temp
                index = temp.index
                continue
            }

            if(temp.index < index) {
                index = temp.index
                output = temp
            }
        }

        return output
    }

    static reverseString(str) {
        return str.split('').reverse().join('')
    }
}

function decodePartOne(code) {
    let outStr = ""
    Array.from(code).forEach((c)=>{
        outStr += c >= '0' && c <= '9' ? c : ''
    })
    if(outStr.length < 2) return parseInt(outStr[0] + outStr[0])
    else return parseInt(outStr[0] + outStr[outStr.length - 1])
}


function decodePartTwo(code) {
    let min, max = 0

    min = Utility.findNumInString(code).value
    max = Utility.findNumInString(code, false).value

    return parseInt(min.toString() + max.toString())
}

function readFile(path) {
    let total = [0, 0]

    let file = fs.readFileSync(path, 'utf8')

    file.split('\n').forEach((code)=>{
        total[0] += decodePartOne(code)
        total[1] += decodePartTwo(code)
    })

    return total
}

output = readFile('./input/document.txt')

console.log(`[PART 1] The total of these calibration values is ${output[0]}`);
console.log(`[PART 2] The total of these calibration values is ${output[1]}`);