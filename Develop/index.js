// Packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for creating this project?'
        },
        {
            type: 'input',
            name: 'build',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does this project solve?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn from this project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the project (step by step instructions)?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the project (provide examples)?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license do you want to give this project?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'confirm',
            name: 'collaborators',
            message: 'Where there any collaborators on this project?',
            default: false
        },
        {
            type: 'input',
            name: 'collabLink',
            message: 'Provide links to all collaborators github profiles',
            when: ({ collaborators }) => {
                if (collaborators) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'thirdparty',
            message: 'Did you use any 3rd party assets?',
            default: false
        },
        {
            type: 'input',
            name: 'thirdPartyAssets',
            message: 'Provide links to all 3rd party contributors',
            when: ({ thirdparty }) => {
                if (thirdparty) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tutorials',
            message: 'Did you use any tutorials?',
            default: false
        },
        {
            type: 'input',
            name: 'tutorialsLink',
            message: 'Provide links to all tutorials used',
            when: ({ tutorials }) => {
                if (tutorials) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests are there for your application (provide examples)?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubUserName => {
                if (githubUserName) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailAddress => {
                if (emailAddress) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Initialize app
questions()
    .then(generateMarkdown)
    .then(writeToFile)
    .catch(err => {
        console.log(err);
    });

