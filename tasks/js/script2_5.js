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
console.log(profitsOfAllShops) // для теста

//================================== (5)============================================================================

const wednesday = 2
let wednesdayArr = []

for (let row = 0; row < profitsOfAllShops.length; row++) {
    for (let col = wednesday; col <= wednesday; col++) {
        wednesdayArr.push(profitsOfAllShops[row][col])        
    }
}

console.log(wednesdayArr) // для теста
const maxValue = wednesdayArr.reduce((prevMax, element) => element > prevMax ? element : prevMax)       

result1.innerHTML = `Max of wednesday = <span>${maxValue}</span>`

