function getRandomNum(minVal = 1, maxVal = 100) {
    return minVal + Math.floor(Math.random() * maxVal)
}

function createRandomArr(arrLength) {
    const arr = []
    for (let i = 0; i < arrLength; i++) {
        const randomNum = getRandomNum()
        arr.push(randomNum)
    }
    return arr
}

function createRandomTable(rowNum, colNum) {
    const table = []
    for (let i = 0; i < rowNum; i++) {
        const randomRow = createRandomArr(colNum)
        table.push(randomRow)
    }
    return table
}

const arrLength = parseInt(prompt('Введите длинну рандомного массива:'))
const colNum = arrLength
const rowNum = parseInt(prompt('Ввведите длинну основного массива:'))

const tableArr = createRandomTable(rowNum, colNum)
console.log(tableArr)  // для теста
const halfOfColumnLength = Math.floor(colNum / 2)
const halfOfRowsLength = Math.floor(rowNum / 2)

let sum = 0

for (let rowNum = halfOfRowsLength; rowNum <= tableArr.length - 1; rowNum++) {
    for (let colNum = halfOfColumnLength; colNum <= tableArr[rowNum].length - 1; colNum++) {
       sum += tableArr[rowNum][colNum]    
    }    
}

result1.innerHTML = `Сумма элементов области (4): <span>${sum}</span>`
