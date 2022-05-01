// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = questions => {
    console.log(questions);
    const { title, motivation, build, problem, learn, installation } = questions[0];
    return `# ${title}

## Description

${motivation}
${build}
${problem}
${learn}

# Table of Contents

- [Installation](#installation)
- [Useage](#Useage)
- [Credits](#Credits)
- [License](#License)

## Installation

${installation}
`;
};


// ## Description

// ${data.motivation}
// ${data.build}
// ${data.problem}
// ${data.learn}

// # Table of Contents

// - [Installation](#installation)
// - [Useage](#Useage)
// - [Credits](#Credits)
// - [License](#License)

// ## Installation

// ${data.installation}

// ## Usage

// ${data.usage}

// ## License

// ${data.license}

// ## How to Contribute

// ${data.contribute}

// $$ Tests

// ${data.tests}

// $$ Questions

// ${data.GitHub}
// ${data.email}