import { useState } from "react";

function TextForm({ heading }) {
    const [text, setText] = useState("Default Text");

    const handleToUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return <div>
        <h1>{heading}</h1>
        <div className="mb-3">
            <textarea name="editor" id="editor" className="form-control" value={text} onChange={handleOnChange} rows={8}></textarea>
        </div>
        <button onClick={handleToUpperCase} className="btn btn-primary">Convert to Uppercase</button>
    </div>
}

export default TextForm;