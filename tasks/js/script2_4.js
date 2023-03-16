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

//================================== (4)============================================================================

let sum = 0

for (let row = 0; row < profitsOfAllShops.length; row++) {
    for (let col = 5; col <= profitsOfAllShops[row].length - 1; col++) {
        sum += profitsOfAllShops[row][col]        
    }    
}

result1.innerHTML = `Сумма прибыли всех магазинов за weekend = <span>${sum}</span>`




