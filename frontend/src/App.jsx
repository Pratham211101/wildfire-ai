import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setMessage(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 className="bg-red-400 text-white">WILDFIRE AI</h1>
      <div className="App">
        <h1>Wildfire Prediction WebApp</h1>
        <p>Backend says: {message}</p>
      </div>
    </>
    
  );
}
//test deploy

export default App;
