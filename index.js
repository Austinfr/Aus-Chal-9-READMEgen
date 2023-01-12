// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your project about?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What does one need to install for this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How can someone use this project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How can someone preform tests of this project?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What license is used for this project?',
        name: 'license',
        choices: []
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((response) =>
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
