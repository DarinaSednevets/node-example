const chalk = require('chalk');

function bar() {
  console.log(chalk.greenBright(('this is bar')));
}

module.exports.bar = bar;
