const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes()

    const isTitlePresent = notes.some((note) => {
        return note.title.toLowerCase() == title.toLowerCase()
    })

    if(isTitlePresent){
        console.log('Title ' + title + ' is already present')
    }else{
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const updatedNotes = notes.filter((note) => {
        return note.title.toLowerCase() != title.toLowerCase()
    })

    if(notes.length == updatedNotes.length){
        console.log('No note with title ' + title + ' found')
    }

    saveNotes(updatedNotes)
}

const listAllNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    });

}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => {
        return note.title.toLowerCase() == title.toLowerCase()
    })

    if(note){
        console.log(note.title)
        console.log(note.body)
    }else{
        console.log("No note with title " + title + " found")
    }

}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }catch(err){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote: readNote
}