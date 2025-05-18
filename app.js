const yargs = require('yargs')
const notesUtils = require('./notesUtil.js')

//Add note command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Adding a new note')
        notesUtils.addNote(argv.title, argv.body)
    }
})

//Remove note command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Removing a note')
        notesUtils.removeNote(argv.title)
    }
})

//List all notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        console.log('Listing all notes')
        notesUtils.listAllNotes()
    }
})

//Read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Reading the note')
        notesUtils.readNote(argv.title)
    }
})

yargs.parse()