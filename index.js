// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "author"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "gitname"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "desc"
    },
    {
        type: "input",
        message: "Describe the installation process",
        name: "install"
    },
    {
        type: "input",
        message: "Describe the usage process",
        name: "usage"
    },
    {
        type: "input",
        message: "Credit any collaborators here",
        name: "credits"
    },
    {
        type: "input",
        message: "Describe the contribution instructions here",
        name: "contrib"
    },
    {
        type: "list",
        message: "Select a license",
        name: "license",
        choices: [
            {
                name: "MIT"
            },
            {
                name: "GPL"
            },
            {
                name: "BSD"
            }
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        let output = JSON.stringify(answers);
        console.log(output);
    })
}

// Function call to initialize app
init();
