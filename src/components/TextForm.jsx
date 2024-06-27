import PropTypes from "prop-types";
import { useLayoutEffect, useState } from "react";

function TextForm({ heading }) {
  const [text, setText] = useState("");
  const [extractEmails, setExtractEmails] = useState([]);

  const handleToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleExtractEmail = (event) => {
    let emails = text
      .split(" ")
      .filter((word) =>
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(word)
      );

    setExtractEmails(emails);
  };

  return (
    <div className="flex item-center">
      <div>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            name="editor"
            id="editor"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            onPaste={handleOnChange}
            rows={8}
          ></textarea>
        </div>
        <button
          disabled={! text}
          onClick={handleToUpperCase}
          className="btn btn-outline-primary ml-2"
        >
          Convert to Uppercase
        </button>
        
        <button
          disabled={! text}
          onClick={handleToLowerCase}
          className="btn btn-outline-primary mx-2"
        >
          Convert to Lowercase
        </button>

        <button
          disabled={! text}

          onClick={handleExtractEmail}
          className="btn btn-outline-primary mx-2"
        >
          Extract Emails
        </button>

        <button
          disabled={! text}
          onClick={handleClearText}
          className="btn btn-outline-primary mx-2"
        >
          Clear Text
        </button>
      </div>

      {extractEmails.length ? (
        <>
          <h1>Extracted Emails</h1>
          <ul>
            {extractEmails.map((email) => (
              <li key={email}>{email}</li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}

      {text ? (
        <div className="my-3">
          <h1>Text Summary</h1>
          <div className="flex gap-2">
            <p>
              <b>{text.split(" ").filter((item) => item).length}</b> Words and{" "}
              <b>{text.length}</b> Characters
            </p>

            <div>
              <h1>Preview</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default TextForm;
