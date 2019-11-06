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
        message: 'Project name:',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes.';
        }
    },
];

const gX = chalk.grey('x');
const colorWrap = value => chalk.yellow.bold(value);
console.log(chalk.cyan(`${chalk.grey('***|')}ADOOONE${chalk.grey('*')}TEAM${chalk.grey('|***')}`));
// console.log('');
// console.log('  xxx    xxxx      xxx      xxx      xxx    xxx    xx  xxxxxx');
// console.log('xx   xx  xx  xx  xx   xx  xx   xx  xx   xx  xx x   xx  xx');
// console.log('xxxxxxx  xx  xx  xx   xx  xx   xx  xx   xx  xx  x  xx  xxxxxx');
// console.log('xx   xx  xx  xx  xx   xx  xx   xx  xx   xx  xx   x xx  xx');
// console.log('xx   xx  xxxx      xxx      xxx      xxx    xx    xxx  xxxxxx');
// console.log('');
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

        fs.mkdirSync(`${CURR_DIR}/${projectName}`);

        createDirectoryContents(templatePath, projectName);
    });

function createDirectoryContents(templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;

        // get stats about the current file
        const stats = fs.statSync(origFilePath);

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');

            if (file === '.npmignore') file = '.gitignore';

            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

            // recursive call
            createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        }
    });
}