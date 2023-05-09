import axios from "axios";

function App() {
  const handleSubmit = async (e) => {
    var data = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    const response = await fetch(
      "http://localhost/Scandiweb-Junior-Developer-Test-Task/server/removeProducts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(data),
      }
    );

    const test = await response.json();

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
