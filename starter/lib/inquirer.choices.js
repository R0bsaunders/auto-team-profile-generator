// array of questions for user
const choices = [
    {
        type: 'input',
        name: 'manager',
        message: "Name of employee's manager?",
        validate: function(manager) {

            return validator(manager);
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: function(desc) {

            return validator(desc);
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        validate: function(inst) {

            return validator(inst);
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
        validate: function(use) {

            return validator(use);
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license Type',
        choices:
        [
            'Apache',
            'Boost',
            'MIT'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing instructions?',
        validate: function(contr) {

            return validator(contr);
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have been run?',
        validate: function(test) {

            return validator(test);
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: function(git) {

            return validator(git);
        }
        },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function(email) {

            return validator(email);
        }
    }
  ];

// Function to check for empty answers and return message prompting user to type something
function validator(input) {
    return (!input ? `Please enter a value` : true);

};

module.exports = choices;