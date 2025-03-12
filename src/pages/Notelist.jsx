import React from 'react'

function Notelist({notes, editNote, deleteNote}) {

  return (
    <div className='mt-4 space-y-3'>
        {notes.length === 0 ? (
            <p className='text=gray-500 text-center'>No notes</p>
        ) : (
            notes.map((note) => (
                <div key={note.id} className='flex items-center justify-between p-3 bg-gray-100 rounded'>
                    <span className='flex-1'>{note.text}</span>
                    <div className='space-x-2'>
                        <button onClick={() => {
                            const newText = prompt("Edit your note:", note.text);
                            if (newText) editNote(note.id, newText)
                        }} className='text-blue-500 hover:underline'> Edit
                        </button>
                        <button onClick={() => deleteNote(note.id)} className='text-red-500 hover:underline'>Delete</button>
                    </div>
                </div>
            ))
        ) }
    </div>
  )
}

export default Notelist