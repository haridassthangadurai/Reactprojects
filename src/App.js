import React, { useState } from "react";
import Header from "./companent/Header";
import CreateArea from "./companent/CreateArea";
import Note from "./companent/Note";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./companent/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea addOn={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
