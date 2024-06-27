import { useState } from "react";
import NavBar from "./components/NavBar";
import Play from "./components/Play";

const App = () => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <NavBar />

      <button
        className="btn btn-outline-danger"
        onClick={() => setShowBtn((prev) => !prev)}
      >
        {showBtn ? "Hide" : "Show"}
      </button>

      <Play showBtn={showBtn}></Play>

    </>
  );
};

export default App;
