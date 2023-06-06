import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes({notes, deleteNote}) {

  
  return (
    <div className="flex flex-wrap justify-center items-center space-x-5 space-y-5 mt-5">
  
      {notes.map(note =>(
        <div className="bg-yellow-400 shadow-2xl p-5" key={note.id}>
        <div className="p-3 " >
          <h1 className="font-bold text-2xl mb-4">{note.title}</h1>
          <p className="text-gray-700 text-base">{note.content}</p>
          <div className="flex justify-around mt-5">
          <FaEdit />
          <FaTrash onClick={() => deleteNote(note.id)}/>
          </div>


        </div>
        </div>
      ))}
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
    </div>
  );
}

export default Notes;