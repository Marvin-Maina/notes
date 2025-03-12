import {useState} from 'react'

function Noteform({addNote}) {
  const [text, setText] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text)
    setText("")
  };


  return (
  <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
    <input type="text" placeholder='Enter a note...' value={text} onChange={(e) => setText(e.target.value)}/>
    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'> Enter a note</button>
    
  </form>
  )
}

export default Noteform