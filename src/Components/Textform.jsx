import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (!text.trim()) {
      props.showAlert("Please write something!", "danger");
    } else {
      props.showAlert("Converted to Uppercase!", "success");
    }
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (!text.trim()) {
      props.showAlert("Please write something!", "danger");
    } else {
      props.showAlert("Converted to Lowercase!", "success");
    }
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    if (!text.trim()) {
      props.showAlert("Please write something!", "danger");
    } else {
      props.showAlert("Text Cleared!", "success");
    }
  };

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    if (!text.trim()) {
      props.showAlert("Please write something!", "danger");
    } else {
      props.showAlert("Removed Extra Spaces", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "black" : "white",
          }}
          className="btn btn-light mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "black" : "white",
          }}
          className="btn btn-light mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "black" : "white",
          }}
          className="btn btn-light mx-2"
          onClick={handleClearClick}
        >
          Convert to Clear Text
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "black" : "white",
          }}
          className="btn btn-light mx-2"
          onClick={handleCopy}
        >
          Convert to Copy Text
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "black" : "white",
          }}
          className="btn btn-light mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
