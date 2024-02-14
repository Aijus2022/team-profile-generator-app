// Import the Employee class
const Employee = require('./Employee');

// Define the Manager class, extending from Employee
class Manager extends Employee {
    // Constructor method to initialize properties
    constructor(name, id, email, officeNumber) {
        // Call the super constructor to inherit properties from Employee
        super(name, id, email);
        // Set the officeNumber property
        this.officeNumber = officeNumber;
    }

    // Method to get the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the getRole() method to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

// Export the Manager class
module.exports = Manager;
