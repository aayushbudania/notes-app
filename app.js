const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

// const string = str();
// console.log(string);

// console.log(validator.isEmail('aayushbudania@yahoo.com'));

// console.log(chalk.red("success"));

// const command = process.argv[2];

// if(command === 'add'){
//       console.log('Adding Note');
// }
// if(command === 'remove'){
//       console.log('removing note');
// }

// console.log(process.argv);
// console.log(yargs.argv);

yargs.command({
      command:'add',
      describe:'Adding note',
      builder:{
            title:{
                  describe:'Title of Note',
                  demandOption: true,
                  type: 'string'
            },
            body:{
                  describe:'Body of Note',
                  demandOption:true,
                  type:'string'
            }
      },
      handler: function(argv){
            notes.addNotes(argv.title,argv.body);
      }
})

yargs.command({
      command:'delete',
      describe:'delete note',
      builder:{
            title:{
                  describe:'Title of note to be deleted.',
                  demandOption:true,
                  type: 'string'
            }
      },
      handler: function(argv){
            notes.removeNote(argv.title);
      }
})

yargs.command({
      command:'list',
      describe:'listing note',
      handler: function(){
            notes.showNotes();
      }
})

debugger;

yargs.command({
      command:'read',
      describe:'reading note',
      builder:{
            title:{
                  demandOption:true,
                  type: 'string'
            }
      },
      handler: function(argv){
            notes.readNotes(argv.title);
      }
})

// console.log(yargs.argv)
yargs.parse();