// Import the Employee class
const Employee = require('./Employee');

// Define the Intern class, extending from Employee
class Intern extends Employee {
    // Constructor method to initialize properties
    constructor(name, id, email, school) {
        // Call the super constructor to inherit properties from Employee
        super(name, id, email);
        // Set the school property
        this.school = school;
    }

    // Method to get the intern's school
    getSchool() {
        return this.school;
    }

    // Override the getRole() method to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

// Export the Intern class
module.exports = Intern;
