const readlineSync = require('readline-sync')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// let username = readline.question('What\'s your name? ', name => {
//     console.log(`Hi, ${name}!`)
//     // readline.close()
// })

// let favFood = readline.question('What\'s your favorite food?', food => {
//     console.log(`That's great!  I love ${food}`)
//     readline.close()
// })

let username = readlineSync.question('What\'s your name? ', {
    hideEchoBack: false
})

let favFood = readlineSync.question('What\'s your favorite food?', {
    hideEchoBack: true
})

console.log(`Hi ${username}, I heard you're a fan of ${favFood}.  ME TOO!`)
readline.close()
