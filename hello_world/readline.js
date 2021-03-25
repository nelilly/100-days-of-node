
// const readline = require('readline').createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })

    // let username = readline.question('What\'s your name? ', name => {
        //     console.log(`Hi, ${name}!`)
        //     // readline.close()
        // })

        // let favFood = readline.question('What\'s your favorite food?', food => {
            //     console.log(`That's great!  I love ${food}`)
            //     readline.close()
            // })

const readlineSync = require('readline-sync')

let username = readlineSync.question('What\'s your name? ', {
    hideEchoBack: true
})

console.log(`Hi ${username}!`)
