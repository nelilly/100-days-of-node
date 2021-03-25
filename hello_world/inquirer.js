const inquirer = require('inquirer')

let questions = [
    {
        type: 'input',
        name: 'name',
        question: 'What\'s your name?'
    },
    {
        type: 'input',
        favFood: 'pizza',
        question: 'What\'s your favorite food?'
    }
]

inquirer.prompt(...questions).then(answers => {
    console.log(`Hi, ${answers['name']}!  I heard you like ${answers['favFood']}`)
})