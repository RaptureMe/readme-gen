const badges = (license)=>{
  switch (license) {
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"; 
    default: return;
  }

}

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
  - [Questions](#questions)
  
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${answers.usage}
  
  ![alt text](assets/images/screenshot.png)
  
  ## Credits
  
  ${credits}
  
  ## License
  
  ${answers.license}${badges(answers.license)}

  ## Questions
  
  if you'd like to reach me with questions, my github is:
  my github is: [Click Here!](https://github.com/${answers.github})
  my best contact email is ${answers.email}
  
  `;
  }
  
  //exports to index.js
  module.exports = generateReadme;
  