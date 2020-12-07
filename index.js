#!/usr/bin/env node
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

const CHOICES = fs.readdirSync(`${__dirname}/boils`);
const CURR_DIR = process.cwd();

const QUESTIONS = [
    {
        name: 'project-choice',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: CHOICES
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name (leave empty for generating in current folder):',
    },
];

const gX = chalk.grey('x');
const colorWrap = value => chalk.yellow.bold(value);
console.log(chalk.cyan(`${chalk.grey('***|')}ADOOONE${chalk.grey('*')}TEAM${chalk.grey('|***')}`));
console.log('');
console.log(colorWrap(`  xxx${gX}    xxxx${gX}      xxx${gX}      xxx${gX}      xxx${gX}    xxx${gX}   xx${gX}  xxxxxx${gX}`));
console.log(colorWrap(`xx${gX}  xx${gX}  xx${gX} xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}x${gX}  xx${gX}  xx${gX}`));
console.log(colorWrap(`xxxxxxx${gX}  xx${gX} xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX} x${gX} xx${gX}  xxxxxx${gX}`));
console.log(colorWrap(`xx${gX}  xx${gX}  xx${gX} xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  xx${gX}  x${gX}xx${gX}  xx${gX}`));
console.log(colorWrap(`xx${gX}  xx${gX}  xxxx${gX}      xxx${gX}      xxx${gX}      xxx${gX}    xx${gX}   xxx${gX}  xxxxxx${gX}`));
console.log('');
console.log(chalk.green('Create project from Adooone templates'));
inquirer.prompt(QUESTIONS)
    .then(answers => {
        const projectChoice = answers['project-choice'];
        const projectName = answers['project-name'];
        const templatePath = `${__dirname}/boils/${projectChoice}`;

        if (projectName !== '') fs.mkdirSync(`${CURR_DIR}/${projectName}`);

        createDirectoryContents(templatePath, projectName);
    });

function createDirectoryContents(templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);
    const directory = newProjectPath === '' ? `${CURR_DIR}` : `${CURR_DIR}/${newProjectPath}`;

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;
        const stats = fs.statSync(origFilePath);

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');
            if (file === '.npmignore') file = '.gitignore';
            const writePath = `${directory}/${file}`;
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${directory}/${file}`);
            createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        }
    });
}