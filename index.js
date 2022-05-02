// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown.js');
// Develop\utils\generateMarkdown.js

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeFile = generateMarkdown => {
    return new Promise((resolve, reject) => {
            fs.writeFile('./dist/README.md', generateMarkdown, err => {
            // if there's an error reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidently execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}; 

// TODO: Create a function to initialize app
var init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?'
        },
        {
            type: 'input',
            name: 'build',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license for your project from the options below. If you need help choosing a license, refer to https://choosealicense.com/licenses/',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like to add a section explaining how other developers can contribute to your project?',
            default: true
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can other developers contribute to your project?',
            when: ({ confirmContribute }) => {
                if (confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application. Then provide examples on how to run them here.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter you GitHub Username!'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter you email address!'
        }
    ]).then(projectData => {
        questions.push(projectData);
        // console.log(questions);
        return questions;
    });
};

// Function call to initialize app
init()
    .then(questions => {
        return generateMarkdown(questions); 
    })
    .then(readmeText => {
        return writeFile(readmeText);
    })
    .catch(err => {
        console.log(err);
    });

// var test4 = 4;
// var testNumber = ['3'];

// console.log(testNumber);

// function test([test]) {
//     switch(test) {
//         case '1':
//             return `test 1 - ${test4}`
//         case '2':
//             return `test 2 - ${test4}`
//         case '3':
//             return `test 3 - ${test4}`
//     }
// }

// console.log(test(testNumber))