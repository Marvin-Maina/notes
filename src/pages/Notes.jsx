import React from 'react'
import Noteform from './Noteform'
import Notelist from './Notelist'
import { useState, useEffect } from 'react'
function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect (() =>{
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(savedNotes);
    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const addNote = (text) => {
        setNotes([...notes, {id: Date.now(), text}])
    }

    const editNote = (id, newText) => {
        setNotes(notes.map((note) => (note.id === id ? {...note, text: newText} : note)));
    }

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };
  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg '>
        <h1 className='text-2xl font=bold text-center mb-4'> Notes</h1>
        <Noteform addNote={addNote} />
        <Notelist notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  
  )
}

export default Notes