// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge([license]) {
    if (!license) {
        return '';
    }

    switch(license) {
         case 'GNU AGPLv3':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'GNU LGPLv3':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink([license]) {
//     if (!license) {
//         return '';
//     }

//     switch(license) {
//         case 'GNU AGPLv3':
//            return '(https://choosealicense.com/licenses/agpl-3.0/)';
//        case 'GNU GPLv3':
//            return '(https://choosealicense.com/licenses/gpl-3.0/)';
//        case 'GNU LGPLv3':
//            return '(https://choosealicense.com/licenses/lgpl-3.0/)';
//        case 'Mozilla Public License 2.0':
//            return '(https://choosealicense.com/licenses/mpl-2.0/)';
//        case 'Apache License 2.0':
//            return '(https://choosealicense.com/licenses/apache-2.0/)';
//        case 'MIT License':
//            return '(https://choosealicense.com/licenses/mit/)';
//        case 'Boost Software License 1.0':
//            return '(https://choosealicense.com/licenses/bsl-1.0/)';
//        case 'The Unlicense':
//            return '(https://choosealicense.com/licenses/unlicense/)';
//    }
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection([license]) {
    if (!license) {
        return '';
    }

    switch(license) {
        case 'GNU AGPLv3':
           return 'Licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)';
       case 'GNU GPLv3':
           return 'Licensed under the [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
       case 'GNU LGPLv3':
           return 'Licensed under the [GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)';
       case 'Mozilla Public License 2.0':
           return 'Licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
       case 'Apache License 2.0':
           return 'Licensed under the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
       case 'MIT License':
           return 'Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)';
       case 'Boost Software License 1.0':
           return 'Licensed under the [Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
       case 'The Unlicense':
           return  'Licensed under the [The Unlicense](https://choosealicense.com/licenses/unlicense/)';
   }
};

// TODO: Create a function to generate markdown for README
module.exports = questions => {
    console.log(questions);
    const { title, motivation, build, problem, learn, installation, usage, license, contribute, tests, github, email } = questions[0];
    return `# ${title}

${renderLicenseBadge(license)}

## Description

${motivation}.
${build}.
${problem}.
${learn}.

# Table of Contents

- [Installation](#installation)
- [Useage](#Useage)
- [Credits](#Credits)
- [License](#License)

## Installation

${installation}.

## Usage

${usage}.

## License

${renderLicenseSection(license)}.

## How to Contribute

${contribute}.

## Tests

${tests}.

## Questions

If you have any questions reach out through my GitHub http://github.com/${github}
Or you can email me at ${email}
`;
};