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

//================================== (3)============================================================================

let sum = 0
const workingDays = 5

for (let row = 0; row < profitsOfAllShops.length; row++) {
    for (let col = 0; col < workingDays; col++) {
        sum += profitsOfAllShops[row][col]
    }
}

result1.innerHTML = `Сумма прибыли всех магазинов за рабочие дни = <span>${sum}</span>`
