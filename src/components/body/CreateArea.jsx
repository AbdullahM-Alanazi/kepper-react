import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = ({ addNewNote }) => {
  const [Focus, setFocus] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //* Single note object handler.
  function handleNote(event) {
    const value = event.target.value;
    const name = event.target.name;
    //* Change the given property name, remaining the rest of the fields unchanged.
    setNote({
      ...note,
      // name:value
      [name]: value,
    });
  }

  return (
    <>
      <form
        className='create-note'
        onSubmit={(event) => {
          event.preventDefault();
          // * Parent function.
          addNewNote(note);
          // * Clear the initialState.
          setNote({
            title: "",
            content: "",
          });
        }}>
        {Focus && (
          <input
            name='title'
            placeholder='Title'
            onChange={handleNote}
            value={note.title}
            autoFocus='true'
          />
        )}
        <textarea
          name='content'
          placeholder='Take a note...'
          rows={Focus ? "3" : "1"}
          onChange={handleNote}
          value={note.content}
          onClick={() => setFocus(true)}
        />

        <Zoom in={Focus}>
          <Fab type='submit'>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};
export default CreateArea;
