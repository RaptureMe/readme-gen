function generateReadme(answers) {
    //Added linebreak feature for common places to linebreak in README file.
    const description = answers.description.replace(/;/g, '<br/>');
    const installation = answers.installation.replace(/;/g, '<br/>');
    const credits = answers.credits.replace(/;/g, '<br/>');
    return `# ${answers.title}
  
  ## Description 
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## Credits
  
  ${credits}
  
  ## License
  
  ${answers.license}
  
  `;
  }
  
  //exports to index.js
  module.exports = generateReadme;
  