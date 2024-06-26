import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <TextForm heading={"Enter the text to anaylze below"}></TextForm>
      </div>
    </>
  );
}

export default App;
