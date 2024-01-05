const chalk = require('chalk')
const fs = require('fs')


const addNote =  (title, body) => {

    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })

    const duplicateNotes = notes.find((note) => note.title === title)
    

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green('New note added.'))
    }
    else{

        console.log(chalk.red('Note title taken. This is a test line added'))

    }
}

const removeNote = (title) => {

    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !==title)

    if(notes.length > notesToKeep.length){
        
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {

    console.log(chalk.inverse('YOUR NOTES'))
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    });

}

const readNote = (title) => {

    const notes = loadNotes()
    const findTitle = notes.find((note) => note.title === title)

    if(findTitle){
        console.log(chalk.inverse(findTitle.title))
        console.log(findTitle.body)
    }
    else{
        console.log(chalk.red('Note not found!!!'))
    }
}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }

    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}