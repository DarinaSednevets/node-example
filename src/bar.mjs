/* eslint-disable import/prefer-default-export */
// const chalk = require('chalk');
import chalk from 'chalk';

function bar() {
  console.log(chalk.greenBright(('this is bar')));
}

// module.exports.bar = bar;
export { bar };
