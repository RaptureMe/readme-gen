const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./generateReadme');

inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a description for your project:',
    name: 'description',
  },
  // Add more prompts for the other sections
]).then((res) => {
  fs.writeFile('README.md', generateReadme(res), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});