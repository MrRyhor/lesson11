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


//================================== (8)============================================================================

// for (let row = 0; row < profitsOfAllShops.length; row++) {
//     profitsOfAllShops[row].sort((el1, el2) => el2 - el1)
// }
for (const row of profitsOfAllShops) {
    for (const col of row) {
        row.sort((element1, element2) => element2 - element1)
    }
    profitsOfAllShops.sort((element1, element2) => element2[0] - element1[0])
}

console.log(profitsOfAllShops)

result1.innerHTML = `[${profitsOfAllShops}]`

