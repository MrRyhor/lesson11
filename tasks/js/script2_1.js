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

//================================== (1)============================================================================
function getSumOfWeek(numOfShop) {
    let sumOfWeek = 0
    for (let row = numOfShop - 1; row <= numOfShop - 1; row++) {
        for (let col = 0; col < profitsOfAllShops[row].length; col++) {
            sumOfWeek += profitsOfAllShops[row][col]
        }
        return sumOfWeek
    }
}

let arrWithAllProfitsPerShop = []

for (let i = 1; i <= qntShops; i++) {
    let totalSumOfWeek = getSumOfWeek(i)
    arrWithAllProfitsPerShop.push(totalSumOfWeek)
}

result1.innerHTML = `[${arrWithAllProfitsPerShop}]`


