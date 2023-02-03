//most is self explanitory
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'BSD 2':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'Creative Commons':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'Open Database License':
      return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
    case 'Public Domain':
      return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
    case 'Perl':
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
    case 'WTFPL':
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
}
//table of contents link
function renderLicenseLink(license) {
  if(license === 'none'){
    return '';
  }
  return `- [License](#license)\n`
}

function renderLicenseSection(license) {
  if(license === 'none'){
    return '';
  }

  return `## License

${renderLicenseBadge(license)}
`;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## TOC/Links

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
${renderLicenseLink(data.license)}- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Testing

${data.test}

${renderLicenseSection(data.license)}

## Questions

If there are any questions you can contact me at ${data.email} or refer to https://github/${data.username} 
`;
}

module.exports = {generateMarkdown};
