const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = function(){
      return "Your Notes....";
}
const addNotes = function(title , body){
      const notes = listNodes();

      const temp = notes.filter(function(note){
            return note.title === title;
      })

      if(temp.length === 0){    
            notes.push({
                  title: title,
                  body: body
            })
            saveNotes(notes);
            console.log('Note Added');
      }
      else{
            console.log('Duplicate title');
      }
}

const removeNote = function(title){
      const notes = listNodes();

      const temp = notes.filter(function(note){
            if(note.title === title)
                  return false;
            else
                  return true;
      })
      if(temp.length === notes.length)
            console.log(chalk.green('No note present'));
      else
            console.log(chalk.red("Note removed"));
      saveNotes(temp);
}

const saveNotes = function(notes){
      const notesJ = JSON.stringify(notes);
      fs.writeFileSync('notes.json',notesJ);
}

const showNotes = () => {
      const notes = listNodes();

      if(notes.length === 0){
            console.log("No Note present");
      }
      else{
            console.log(chalk.green.inverse("Saved Notes Are:"));
      }
      notes.forEach(function(note){
            console.log("Title: "+note.title);
      })
}

const readNotes = (title) => {
      const notes = listNodes();
      var check = false;
      notes.forEach(function(note){
            if(note.title === title)
                  {
                        check=true;
                        console.log("Searched note is:");
                        console.log("Title: " + note.title);
                        console.log("Body: "+note.body);
                  }
      })
      if(check === false)
            console.log("No Note Present With Given Title.");
}

const listNodes = () => {
      try{
            const temp = fs.readFileSync('notes.json');
            const t2 = temp.toString();
            return JSON.parse(t2);
      }catch(e){
            return [];
      }
}
module.exports = {
      getNotes,
      saveNotes,
      listNodes,
      addNotes,
      removeNote,
      showNotes,
      readNotes
}