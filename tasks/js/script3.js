function createRowWithZeroes(row) {
    let rowWithZeroes = []
    for (let i = 0; i < row; i++) {
        rowWithZeroes.push(0)
    }
    return rowWithZeroes
}

function createBatleField(col) {
    let batleField = []
    for (let i = 0; i < col; i++) {
        const row = createRowWithZeroes(6)
        batleField.push(row)
    }
    return batleField
}

function getRandomCell(minVal = 0, maxVal = 5) {
    return minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
}

let batleField = createBatleField(6)

function getBatlefieldWithShips(qntShips) {
    for (let i = 1; i <= qntShips; i++) {
        let row = getRandomCell()
        let col = getRandomCell()
        if (batleField[row][col] !== 1) batleField[row][col] = 1
        else i--
    }
    return batleField
}

let qntShips = 5
batleField = getBatlefieldWithShips(qntShips)
console.log(batleField) // для теста

function getGame(qntOfShoot) {
    for (let i = 1; i <= qntOfShoot; i++) {
        let userShootX = parseInt(prompt('Введите координату по оси Х:'))
        let userShootY = parseInt(prompt('Введите координату по оси Y:'))
        if (batleField[userShootY - 1][userShootX - 1] === 1 && qntShips > 0) {
            qntShips--
            alert(`Вы потопили корабль осталось кораблей ${qntShips}`)
        } else
            alert('Вы промахнулись :( Стреляйте ещё')
    }
}

let qntOfShoot = parseInt(prompt('Введите кол-во выстрелов:'))

getGame(qntOfShoot)

result1.innerHTML = `GAME OVER`



