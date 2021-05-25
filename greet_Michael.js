const greet = require('./greet');
const chalk = require('chalk');
const figlet = require('figlet');


const message = greet('Xola');

figlet(message, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bold.bgGreen.black(data);
    console.log(styledMessage)
});



const styledMessage = chalk.bold.bgGreen.black(message);

console.log(styledMessage)