// Import the Employee class
const Employee = require('./Employee');

// Define the Engineer class, extending from Employee
class Engineer extends Employee {
    // Constructor method to initialize properties
    constructor(name, id, email, github) {
        // Call the super constructor to inherit properties from Employee
        super(name, id, email);
        // Set the github property
        this.github = github;
    }

    // Method to get the engineer's GitHub username
    getGithub() {
        return this.github;
    }

    // Override the getRole() method to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

// Export the Engineer class
module.exports = Engineer;
