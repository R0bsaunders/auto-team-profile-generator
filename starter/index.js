const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
const choices = require("./lib/inquirer.choices.js");

let employeeList = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// function call to initialize program
addManager();

// function to initialize program
function addManager() {

    closeFunction();

    inquirer.prompt(choices.manager)

    .then((answers)=> {

        employeeList.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

        checkAdd(answers);
     });
};

function addEngineer() {
    
    closeFunction();

    inquirer.prompt(choices.engineer)

    .then((answers)=> {

        employeeList.push(new Engineer (answers.name, answers.id, answers.email, answers.github));

        checkAdd(answers);
    });
};

function addIntern() {

    closeFunction();

    inquirer.prompt(choices.intern)

    .then((answers)=> {

        employeeList.push(new Intern (answers.name, answers.id, answers.email, answers.school));

        checkAdd(answers);
    });
};

// function to write answers to HTML
function writeToFile(fileName, data) {

  fs.writeFile(`../assets/${fileName}`, data, (err) =>err ? console.log(err) : console.log(`Your team has been created called: ${fileName}`));

};

// Exit the inquirer prompt
function closeFunction(){

    process.stdin.on('keypress', (_, key) => {

        if (key.name === "escape") {
            
            prompt.ui.close();

        };
    });
};

// Function to check if user wants to add another employee
function checkAdd(answers) {

    if(answers.addAnother === 'Engineer'){

        addEngineer();

    } else if(answers.addAnother === 'Intern') {

        addIntern();

    } else {

        const exportEmployees = render(employeeList);
        
        writeToFile("team.html", exportEmployees);
    };
};