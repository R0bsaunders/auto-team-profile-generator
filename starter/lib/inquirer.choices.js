// Array of choices for user if they want to add a new employee
const employeeTypes = ['Engineer', 'Intern', 'Finish and create team'];

// The following variables are objects containing the question data for the prompts. As all employee types share name, id and email, this is compliant with DRY principle
const addEmployeeQuestion = {
    type: 'list',
    name: 'addAnother',
    message: "Do you want to add another employee?",
    choices: employeeTypes
};

const nameQuestion = {
    type: 'input',
    name: 'name',
    message: "What is the name?",
    validate: function(name) {

        return validator(name);
    }
};

const idQuestion = {
    type: 'input',
    name: 'id',
    message: "What is their ID?",
    validate: function(id) {

        return isNumber(id);
    }
};

const emailQuestion =  {
    type: 'input',
    name: 'email',
    message: "What is their email address?",
    validate: function(email) {

        return validateEmail(email);
    }
};

const officeNumberQuestion = {
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's Office Number?",
    validate: function(office) {

        return isNumber(office);
    }
};

const githubQuestion = {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub username?",
    validate: function(github) {

        return validator(github);
    }
};

const schoolQuestion = {
    type: 'input',
    name: 'school',
    message: "What school does the intern attend?",
    validate: function(school) {

        return validator(school);
    }
};

// inquirer prompt sequence
const choices = {
    manager: [
        nameQuestion,
        idQuestion,
        emailQuestion,
        officeNumberQuestion,
        addEmployeeQuestion
    ],

    engineer: [
        nameQuestion,
        idQuestion,
        emailQuestion,
        githubQuestion,
        addEmployeeQuestion
    ],

    intern: [
        nameQuestion,
        idQuestion,
        emailQuestion,
        schoolQuestion,
        addEmployeeQuestion
    ] 
};

// Function to check for empty answers and return message prompting user to type something
function validator(input) {

    return (!input ? `Please enter a value` : true);
};

// Function to check for non integer
function isNumber(input) {

    return (!Number.isInteger(parseInt(input)) ? `Please enter a number` : true);
};

// Function to validate email address format

function validateEmail(mail) {

  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) ? true : `You have entered an invalid email address!`;
};

module.exports = choices;