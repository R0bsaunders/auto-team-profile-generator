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

let employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// function call to initialize program
addManager();

// function to initialize program
function addManager() {

  // close inquirer input if user press "escape" key
    closeFunction();

    inquirer.prompt(choices.manager)

    .then((answers)=> {

        const employees = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(employees);

        if(answers.addAnother === 'Engineer'){
            addEngineer();

        } else if(answers.addAnother === 'Intern') {
            addIntern();
        };

     });

};

function addEngineer() {
    
    closeFunction();

    inquirer.prompt(choices.engineer)

    .then((answers)=> {

        const employees = new Engineer (answers.name, answers.id, answers.email, answers.github)
        console.log(employees);
        // writeToFile("answers.txt", answers);

    });

};

function addIntern() {
    closeFunction();

    inquirer.prompt(choices.intern)

    .then((answers)=> {

        const employees = new Intern (answers.name, answers.id, answers.email, answers.school)
        console.log(employees);
        // writeToFile("answers.txt", answers);

    });
};

// function to write answers to HTML
function writeToFile(fileName, data) {

        console.log(data);
//   fs.writeFile(`./assets/${fileName}`, data, (err) =>err ? console.log(err) : console.log(`Answers stored in a new file called ${fileName}`));

};

function closeFunction(){
    process.stdin.on('keypress', (_, key) => {
        if (key.name === "escape") {
          exit();
        };
    });
};

// Exit the inquirer prompt
function exit () {
  prompt.ui.close();
};

