// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeFile = generateMarkdown => {
    return new Promise((resolve, reject) => {
            fs.writeToFile('./dist/README.md', generateMarkdown, err => {
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
            name: 'projectTitle',
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


        
    ]).then(projectData => {
        questions.push(projectData);
        console.log(questions);
    });
};

//Function call to initialize app
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