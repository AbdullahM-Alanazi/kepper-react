import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Note from "./body/Note";
import Footer from "./footer/Footer";
import CreateArea from "./body/CreateArea";

export default function App() {
  // Initialize a state of type array
  const [notes, setNotes] = useState([]); //[Notes]: {title, content}
  // Function to add a new note
  function addNewNote(newNote) {
    // note is an object of two property
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }
  function deleteNote(indexToDelete) {
    setNotes((preValue) => {
      return preValue.filter((index) => {
        return index !== indexToDelete;
      });
    });
  }
  return (
    <>
      <Header />
      <CreateArea addNewNote={addNewNote} />
      {notes.map((note, i) => (
        <Note
          key={i}
          index={i}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}
