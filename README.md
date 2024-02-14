# Team Profile Generator Command Line Application
This Node.js command-line application simplifies the process of generating a webpage showcasing your software engineering team's basic information. With a focus on simplicity and efficiency, this application prompts you to input details about team members, then automatically generates an HTML webpage with individual summaries for each member. Utilizing classes for different roles such as Manager, Engineer, and Intern, along with comprehensive testing, this application ensures accuracy and reliability in its output.

## User Story
As a manager, I want to effortlessly generate a webpage displaying my team's essential information, providing convenient access to their emails and GitHub profiles.

## Usage Instructions
 [Clone Repository](https://github.com/Aijus2022/team-profile-generator-command-line-app)

Install Dependencies: Before running the application, ensure that you have Node.js installed on your system. Then, navigate to the project directory in your terminal and run:

npm install

Run the Application: Execute the following command in your terminal to start the application:

node index.js

Provide Team Information: Follow the prompts to enter the necessary details for each team member. Start by entering the team manager's information, then choose to add engineers, interns, or finish building the team.

Generate HTML: Once you have entered information for all team members and opted to finish building the team, the application automatically generates an HTML file titled team.html in the output folder.

## Mock-Up
HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.
![My Team Screenshot]([screenshots/Screenshot 2024-02-14 024722.png](https://github.com/Aijus2022/team-profile-generator-command-line-app/blob/1a5be4ddb69e1e896589dc13229b18c47a5d3db2/screenshots/Screenshot%202024-02-14%20024722.png))
Note: The styling in the mock-up serves as an example; feel free to customize the appearance according to your preferences.

## Testing
To ensure the reliability and accuracy of the application, comprehensive testing has been implemented using the Jest framework. All tests are located in the _tests_ directory, covering the functionality of each class and its methods.

## Structure
Classes: The application employs classes for different team member roles, including Employee, Manager, Engineer, and Intern, each with specific properties and methods.
User Input: Utilizing the Inquirer package, the application collects user input to gather information about team members.
HTML Rendering: Upon completing the input process, the application generates an HTML webpage with summaries for each team member, using the render function provided.
## Validation 
While not explicitly required, the application incorporates basic validation to ensure proper formatting of user input.
## Additional Notes
Customization: You have the flexibility to customize the styling and appearance of the generated HTML webpage according to your preferences.
Output Location: The generated HTML file (team.html) is saved in the output folder within the project directory.
Enhancements: Consider additional features or enhancements to further improve the application's functionality and user experience.
## Author
This application was created by Aijamal Jusupova.
For any inquiries or feedback, please contact aijus@mail.ru.
