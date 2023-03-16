function getRandomNum(minVal, maxVal) {
    return minVal + Math.floor(Math.random() * maxVal)
}

function createRandomArr(arrLength, minVal, maxVal) {
    const arr = []
    for (let i = 0; i < arrLength; i++) {
        const randomNum = getRandomNum(minVal, maxVal)
        arr.push(randomNum)
    }
    return arr
}

function createRandomTable(rowNum, colNum, minVal, maxVal) {
    const table = []
    for (let i = 0; i < rowNum; i++) {
        const randomRow = createRandomArr(colNum, minVal, maxVal)
        table.push(randomRow)
    }
    return table
}

const minVal = 1, maxVal = 100
const arrLength = parseInt(prompt('Введите длинну рандомного массива:'))
const colNum = arrLength
const rowNum = parseInt(prompt('Ввведите длинну основного массива:'))

const tableArr = createRandomTable(rowNum, colNum, minVal, maxVal)
console.log(tableArr) // для теста

let sum = 0

for (let rowNum = 0; rowNum < tableArr.length; rowNum += 2) {
    for (let colNum = 0; colNum < tableArr[rowNum].length; colNum++) {
        sum += tableArr[rowNum][colNum]
    }
}

result1.innerHTML = `Сумма парных строк: <span>${sum}</span>`

