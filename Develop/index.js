// Import required files. fs to enable interaction with the the file system, inquirer so that questions can be generated, and generateMarkdown to print out contents of README
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// Used inquirer format to produce questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },

  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "What kind of license do you want to have?",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "none"],
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What command should you run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should you run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using this repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "contributing",
  },
];

// Function to write README2
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README.md generated!")
  );
}


// Initial function that is 
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile("README2.md", generateMarkdown(data));
  });
}


init();
