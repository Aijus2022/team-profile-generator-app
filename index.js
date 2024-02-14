const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Function to gather information about the development team members
async function gatherTeamInformation() {
    const team = []; // Array to store team members

    // Prompt for manager information
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number:",
        }
    ];
    const managerAnswers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    team.push(manager);

    // Function to prompt for adding an engineer
    async function promptToAddEngineer() {
        const engineerQuestions = [
            {
                type: "input",
                name: "name",
                message: "Enter the engineer's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the engineer's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the engineer's email address:",
            },
            {
                type: "input",
                name: "github",
                message: "Enter the engineer's GitHub username:",
            },
            {
                type: "list",
                name: "addAnother",
                message: "Do you want to add another engineer?",
                choices: ["Yes", "No"]
            }
        ];
        const engineerAnswers = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        team.push(engineer);
        if (engineerAnswers.addAnother === "Yes") {
            await promptToAddEngineer();
        }
    }

    // Function to prompt for adding an intern
    async function promptToAddIntern() {
        const internQuestions = [
            {
                type: "input",
                name: "name",
                message: "Enter the intern's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the intern's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the intern's email address:",
            },
            {
                type: "input",
                name: "school",
                message: "Enter the intern's school:",
            },
            {
                type: "list",
                name: "addAnother",
                message: "Do you want to add another intern?",
                choices: ["Yes", "No"]
            }
        ];
        const internAnswers = await inquirer.prompt(internQuestions);
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        team.push(intern);
        if (internAnswers.addAnother === "Yes") {
            await promptToAddIntern();
        }
    }

    // Prompt for adding an engineer or an intern
    const addMemberQuestion = {
        type: "list",
        name: "addMember",
        message: "Would you like to add an engineer or an intern?",
        choices: ["Engineer", "Intern", "Finish building the team"]
    };
    let addMemberAnswer;
    do {
        addMemberAnswer = await inquirer.prompt(addMemberQuestion);
        if (addMemberAnswer.addMember === "Engineer") {
            await promptToAddEngineer();
        } else if (addMemberAnswer.addMember === "Intern") {
            await promptToAddIntern();
        }
    } while (addMemberAnswer.addMember !== "Finish building the team");

    // Call the render function and write HTML to file
    const renderedHtml = render(team);
    fs.writeFileSync(outputPath, renderedHtml);
    console.log("Team profile page has been generated successfully!");
}

// Start the application by calling the gatherTeamInformation function
gatherTeamInformation();
