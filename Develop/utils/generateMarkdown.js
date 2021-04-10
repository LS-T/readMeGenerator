// function to render badge
function renderLicenseBadge(license) {
  if (license !== null) {
    const License = "![Github license]";
    return (
      License +
      "(https://img.shields.io/badge/License-" +
      license +
      "-blue.svg)"
    );
  } else {
    console.log("This is not working");
    return " ";
  }
}
// function to return link for license 
function renderLicenseLink(license) {
  if (license !== null) {
    const licenseLinkMessage = "Link to license page: ";
    return (
      licenseLinkMessage + "(https://opensource.org/licenses/" + license + ")"
    );
  } else {
    console.log("Not working");
    return " ";
  }
}
// function to render message in license section 
function renderLicenseSection(license) {
  if (license !== null) {
    return "This project is licensed under the " + license + " license";
  } else {
    console.log("Its broken");
    return " "
  }
}


function generateMarkdown(data) {
  return `
  ## ${data.title}

  ${renderLicenseBadge(data.license)} 
  
  ${renderLicenseLink(data.license)}
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)

  * [Contributing](#contributing)
  
  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  
  To install necessary dependencies, run the following command:
  
  '''
  ${data.installation}
  
  '''
  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  '''
  ${data.tests}

  '''

  ## Questions

  If you have any questions about this particular repo, feel free to open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/LS-T)

`;
}

module.exports = generateMarkdown;
