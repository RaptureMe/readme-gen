function generateReadme(answers) {
    // Replace semicolons with newline characters in the description
    const description = answers.description.replace(/;/g, '\n');
    const installation = answers.installation.replace(/;/g, '\n');
    const credits = answers.credits.replace(/;/g, '\n');
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
  
  module.exports = generateReadme;
  