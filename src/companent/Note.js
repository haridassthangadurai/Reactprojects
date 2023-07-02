import { Delete } from "@mui/icons-material";
import React from "react";

const Note = (props) => {
  const handlyClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note-app">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handlyClick} className="text-warning">
        <Delete />
      </button>
    </div>
  );
};

export default Note;
