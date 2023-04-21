import axios from "axios";

function App() {
  const handleSubmit = async (e) => {
    const response = await fetch(
      "http://localhost/Scandiweb-Junior-Developer-Test-Task/server/",
      {
        method: "POST",
      }
    );

    const test = await response;

    console.log(test);
  };

  return (
    <div className="App">
      <input
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default App;
