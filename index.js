const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        choices: ['none', 'Boost','Apache 2.0', 'BSD 3', 'BSD 2', 'Creative Commons', 'Eclipse', 'GNU GPL v3', 'MIT', 'Mozilla', 'Open Database License', 'Public Domain', 'Perl', 'WTFPL']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, generateMarkdown.generateMarkdown(data), (err) => {
        if(err){
            throw err;
        }
        console.log('README generated successfully');
    })
}

function init() {

    inquirer.prompt(questions)
    .then((response) =>
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
