import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  
  const [inputs, setInputs] = useState({temp:0,humidity:0,wind:0,vegDry:0});
  const [risk,setRisk]=useState("");

  const handleSubmit = async()=>{
    try{
      const res= await axios.post("http://13.232.241.149/api/risk",inputs);
      setRisk(res.data.risk);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div>
      <input type="number" placeholder="Temperature" onChange={e=>setInputs({...inputs,temp:+e.target.value})}/>
      <input type="number" placeholder="Humidity" onChange={e=>setInputs({...inputs,humidity:+e.target.value})}/>
      <input type="number" placeholder="Wind speed" onChange={e=>setInputs({...inputs,wind:+e.target.value})}/>
      <input type="number" placeholder="Vegetation Dryness" onChange={e=>setInputs({...inputs,vegDry:+e.target.value})}/>

      <button onClick={handleSubmit}>Check Risk</button>

      <div className={`mt-4 p-2 text-white ${risk === "High" ? "bg-red-500" : risk === "Medium" ? "bg-yellow-500" : "bg-green-500"}`}>
        Current Risk:{risk || "Input parameters"}
      </div>
    </div>
    
  );
}


export default App;
