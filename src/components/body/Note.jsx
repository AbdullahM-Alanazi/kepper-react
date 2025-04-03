import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, index, deleteNote }) {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      {/* 
      Assign a unique index to each note component, 
      When clicking on the delete button, call a parent function to delete this note by index. 
      **/}
      <button onClick={() => deleteNote(index)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
export default Note;
