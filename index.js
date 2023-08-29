const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./generateReadme');

//Calls function for all the prompts to generate in README
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a description for your project (separate lines with ";"):',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter the installation instructions for your project (separate lines with ";"):',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information for your project:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter credits for your project (separate lines with ";"):',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'Choose the license for your project:',
    name: 'license',
    choices: ['MIT', 'Mozilla', 'IBM', 'None'],
  },
  {
    type: 'input',
    message: 'What is your github username:',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is best contact email:',
    name: 'email',
  },
  //Takes the data and writes into README.md
]).then((data) => {
  fs.writeFile('README.md', generateReadme(data), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});
