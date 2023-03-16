function getRandomNum(minVal = 1, maxVal = 1000) {
    return minVal + Math.floor(Math.random() * maxVal)
}

function createRandomArr(daysOfWeek) {
    const arr = []
    for (let i = 0; i < daysOfWeek; i++) {
        const randomNum = getRandomNum()
        arr.push(randomNum)
    }
    return arr
}

function createTableArr(qntShops) {
    const table = []
    for (let i = 0; i < qntShops; i++) {
        const randomRow = createRandomArr(daysOfWeek)
        table.push(randomRow)
    }
    return table
}

const daysOfWeek = 7
const qntShops = parseInt(prompt('Введите кол-во магазинов:'))

const profitsOfAllShops = createTableArr(qntShops)
console.log(profitsOfAllShops)

//================================== (9)============================================================================
let arrSortByMaxValue = []

for (let row = 0; row < profitsOfAllShops.length; row++) {
    let maxValue = profitsOfAllShops[row].reduce((prevSum, element) => prevSum + element)
    arrSortByMaxValue.push(maxValue)
    arrSortByMaxValue.sort((el1, el2) => el2 - el1)
}

result1.innerHTML = `[${arrSortByMaxValue}]`