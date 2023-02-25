// array of questions for user
const choices = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: function(manager) {

            return validator(manager);
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
    }
];














// Function to check for empty answers and return message prompting user to type something
function validator(input) {
    return (!input ? `Please enter a value` : true);

};

module.exports = choices;