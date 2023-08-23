function generateReadme(answers) {
    const description = answers.description.replace(/;/g, '\n');

    return `# ${answers.title}
  
## Description 
  
${description}
  
`;
  }
  
  module.exports = generateReadme;
  