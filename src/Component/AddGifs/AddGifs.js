import React, { useState } from "react";

const AddGifs = ({ setaddGifs }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGif= e => {
    e.preventDefault();
    if(value === "") {
      setError(true);
      return;
    }
    setError(false);
    setaddGifs(value);
    //for delete the input set
    setValue("");
    console.log("entra input")
  }


  return (
    <div>
      <form onSubmit={ searchGif }>
        <input type="text" placeholder="Search.."
        onChange={e => setValue(e.target.value)}
        value={value}
        />
      </form>
      { error ? <p className="error"> The input cannot be empty </p> : ""}
      </div>
  );
};

export default AddGifs;
