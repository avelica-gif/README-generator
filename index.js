//ideas on how to get started
//inquirer (npm pkg) to ask the user for their input for diff sections of the readme
// use fs to write the info user provides to the README.md
//title of the README
//WHEN I enter a description, installation instructions, usage information, 
//contribution guidelines, and test instructions
//import the generate markdown file with that function
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js')


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your app for this Readme?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of this app?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How would one install this app',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How would one use this app',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution instructions:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Test Instructions',
      name: 'testing',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'github',
    },
    {
      type: 'list',
      message: 'What licesnse do you want to use?',
      choices: ['MIT', 'another'],
      name: 'license',
    },
  ])
  .then((response) =>
    console.log(response) //returns an object of the users response
  );

//may want to take the info from the object and then format it --look at template literals
//once it is formatted, write to file
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
