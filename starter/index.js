const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const choices = require("./lib/inquirer.choices.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// function call to initialize program
init();

// function to initialize program
function init() {

  // close inquirer input if user press "escape" key
  process.stdin.on('keypress', (_, key) => {
    if (key.name === "escape") {
      exit();
    };
  });

  inquirer.prompt(choices.engineer)
  
  .then((answers)=> {

    writeToFile("answers.txt", answers);

  });
};

// function to write answers to HTML
function writeToFile(fileName, data) {

        console.log(data);
//   fs.writeFile(`./assets/${fileName}`, data, (err) =>err ? console.log(err) : console.log(`Answers stored in a new file called ${fileName}`));

};

// Exit the inquirer prompt
function exit () {
  prompt.ui.close();
};

