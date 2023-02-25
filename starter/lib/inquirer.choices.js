// Array of choices for user if they want to add a new employee
const addEmployees = 
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
    
                return validator(id);
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: function(email) {
    
                return validator(email);
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's Office Number?",
            validate: function(office) {
    
                return validator(office);
            }
        },

        {
            type: 'list',
            name: 'addAnother',
            message: "Do you want to add another employee?",
            choices: addEmployees

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
    
                return validator(id);
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: function(email) {
    
                return validator(email);
            }
        },
        
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: function(github) {
    
                return validator(github);
            }
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
    
                return validator(id);
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: function(email) {
    
                return validator(email);
            }
        },
        
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's GitHub username?",
            validate: function(school) {
    
                return validator(school);
            }
        }
    ] 
};





// Function to check for empty answers and return message prompting user to type something
function validator(input) {
    return (!input ? `Please enter a value` : true);

};

module.exports = choices;