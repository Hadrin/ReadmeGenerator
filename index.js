//Import packages required for this project
//inquirer needs to be installed via npm i inquirer as well
const inquirer = require("inquirer");
const fs = require("fs");

//Creates prompts for user and stores for later use
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
        type: "input",
        message: "Describe how to test the software",
        name: "tests"
    },
    {
        //Gives a list of options to choose from
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

//Checks if README.md already exists. If it does, deletes the existing one and creates a new one from user input
//Otherwise, creates a new README.md file and writes to it
function writeToFile(fileName, data) {
    fs.access("README.md", err => {
        if(err){
            fs.appendFile(fileName, data, err => {})
        } else {
            fs.unlink("README.md", err => {})
            fs.appendFile(fileName, data, err => {})
        }
    })
    
}

//Initializes app
//First prompts user with questions regarding their project, then fills out string "output" using answers
//Then passes formatted string to writeToFile()
function init() {
    let licenseShield = "";
    inquirer.prompt(questions).then((answers) => {
        switch(answers.license){
            case "MIT":
                licenseShield = "![MIT License Shield](https://img.shields.io/badge/license-MIT-green)";
                break;
            case "GPL":
                licenseShield = "![GPL License Shield](https://img.shields.io/badge/license-GPL-blue)";
                break;
            case "BSD":
                licenseShield = "![BSD License Shield](https://img.shields.io/badge/license-BSD-yellow)";
                break;
            default:
                throw new Error("No License selected, this should not be possible.")
        }
        let output = `# ${answers.project}
${licenseShield}

Table Of Contents

[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Contributing](#Contributing)
[Credits](#Credits)
[Tests](#Tests)
[Questions](#Questions)
[License](#License)


## Description
Created by: [${answers.author}](https://github.com/${answers.gitname})

${answers.desc}

## Installation
${answers.install}

## Usage
${answers.usage}

## Contributing
${answers.contrib}

## Credits
${answers.credits}

## Tests
${answers.tests}

## Questions
Any questions regarding this software can be directed to the following

${answers.author}

[${answers.email}](mailto:${answers.email})

[Github](${answers.gitname})

## License
Licensed under ${answers.license} license`;
        writeToFile("README.md", output);
    })
}

// Function call to initialize app
init();
