import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
const CreateArea = (props) => {
  const [hideitem, setHideitem] = useState(false);
  const [datas, setDatas] = useState({
    title: "",
    content: "",
  });
  const submithandlying = (e) => {
    const { name, value } = e.target;
    setDatas((prevDatas) => {
      return {
        ...prevDatas,
        [name]: value,
      };
    });
  };
  const hidetextarea = () => {
    setHideitem(true);
  };
  const submitnate = (e) => {
    props.addOn(datas);
    setDatas({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onClick={hidetextarea}
          onChange={submithandlying}
          value={datas.title}
        />
        <br />
        {hideitem && (
          <textarea
            name="content"
            placeholder="Take a note....."
            rows={hideitem ? 3 : 1}
            onChange={submithandlying}
            value={datas.content}
          />
        )}
        <Zoom in={hideitem}>
          <Fab onClick={submitnate} className="bg-warning">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
