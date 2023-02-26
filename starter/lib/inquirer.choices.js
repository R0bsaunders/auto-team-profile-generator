// Array of choices for user if they want to add a new employee
const employeeTypes = 
    [
        'Engineer',
        'Intern',
        'Finish'
    ];

// array of questions for Manager, Engineer and Intern 
const choices = {
    manager: [
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: function(name) {
    
                return validator(name);
            }
        },
    
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: function(id) {
    
                return isNumber(id);
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: function(email) {
    
                return validateEmail(email);
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's Office Number?",
            validate: function(office) {
    
                return isNumber(office);
            }
        },

        {
            type: 'list',
            name: 'addAnother',
            message: "Do you want to add another employee?",
            choices: employeeTypes
        }
    ],

    engineer: [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: function(name) {
    
                return validator(name);
            }
        },
    
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            validate: function(id) {
    
                return isNumber(id);
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: function(email) {
    
                return validateEmail(email);
            }
        },
        
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: function(github) {
    
                return validator(github);
            }
        },
        {
            type: 'list',
            name: 'addAnother',
            message: "Do you want to add another employee?",
            choices: employeeTypes
        }
    ],

    intern: [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: function(name) {
    
                return validator(name);
            }
        },
    
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            validate: function(id) {
    
                return isNumber(id);
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: function(email) {
    
                return validateEmail(email);
            }
        },
        
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: function(school) {
    
                return validator(school);
            }
        },

        {
            type: 'list',
            name: 'addAnother',
            message: "Do you want to add another employee?",
            choices: employeeTypes
        }
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