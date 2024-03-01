import React, { useState } from "react";

export default function TextForm(props) {
  const HandleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const UpperCaseClick = () => {
    console.log("I Make The Text Upper Case");
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const LowerCaseClick = () => {
    console.log("I Make The Text Lower Case");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const CapitalizedCaseClick = () => {
    console.log("I Make First Letter Of The Text Capital");
    let newText = text[0].toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted to Capitalized!", "success");
  };

  const InvertCaseClick = () => {
    console.log("I Make Upper Case To Lower Case And Vice-Versa");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
      setText(newText);
      props.showAlert("Converted to Invert!", "success");
    }
  };

  const handleCopy = () => {
    console.log("I Copy All The Text");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    console.log("I remove Extra Space");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!", "success");
  };

  const ClearClick = () => {
    console.log("I Clear All The Text");
    let newText = "";
    setText(newText);
    props.showAlert("EveryThing is Cleared!", "success");
  };

  const [text, setText] = useState("");
  // text = "New Text"; // Wrong way to change the state
  // setText("New Text"); //Corrrect way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnChange}
            style={{
              background: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={UpperCaseClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={LowerCaseClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={CapitalizedCaseClick}>
          Convert to Capitalized
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={InvertCaseClick}>
          Invert Case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={ClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p> my-1
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
