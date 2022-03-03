const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')


yargs.version('1.1.0')
//console.log(yargs.argv)

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title'
        },
        body: {
            describe: 'Body of note',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
}) 

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
