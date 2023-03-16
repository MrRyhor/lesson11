function getRandomNum(minVal, maxVal) {
    return minVal + Math.floor(Math.random() * maxVal)
}

function createRandomArr(arrLength) {
    const arr = []
    for (let i = 0; i < arrLength; i++) {
        const randomNum = getRandomNum(minVal, maxVal)
        arr.push(randomNum)
    }
    return arr
}

function createTableArr(rowNum) {
    const table = []
    for (let i = 0; i < rowNum; i++) {
        const randomRow = createRandomArr(arrLength)
        table.push(randomRow)
    }
    return table
}

const minVal = 1, maxVal = 100
const arrLength = parseInt(prompt('Введите длину рандомного массива:'))

const tableArr = createTableArr(4)
console.log(tableArr) // для теста
let sumEvenRowOddCol = 0, sumOddRowEvenCol = 0

for (let row = 0; row < tableArr.length; row += 2) {
    for (let col = 1; col < tableArr[row].length; col += 2) {
        sumEvenRowOddCol += tableArr[row][col]
    }    
}

for (let row = 1; row < tableArr.length; row += 2) {
    for (let col = 0; col < tableArr[row].length; col += 2) {
        sumOddRowEvenCol += tableArr[row][col]
    }
}

result1.innerHTML = `Сумма парные строки, не парные столбцы: <span>${sumEvenRowOddCol}</span><br> Сумма не парные строки, парные столбцы: <span>${sumOddRowEvenCol}</span>`
