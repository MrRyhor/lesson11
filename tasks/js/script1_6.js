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

function createTableArr(rowNum, colNum) {
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

const tableArr = createTableArr(rowNum, colNum)
console.log(tableArr)  //для теста
let sum = 0

for (let i = 0; i < tableArr.length; i++) {
    for (let j = 1; j <= tableArr[i].length - 1; j += 2) {
        sum += tableArr[i][j]        
    }    
}

result1.innerHTML = `Сумма не парных столбцов: <span>${sum}</span>`
