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
    type: 'input',
    message: 'Enter the license for your project:',
    name: 'license',
  },
  // Add more prompts for the other sections
]).then((res) => {
  fs.writeFile('README.md', generateReadme(res), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});
