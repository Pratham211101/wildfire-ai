const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//TEST route
app.get('/',(req,res)=>{
    res.send('Backend is running');
});

app.post('/risk', (req, res) => {
  const { temp, humidity, wind, vegDry } = req.body;

  let risk = "Low"; // default

  if (temp > 40 && humidity < 30 && wind > 40 && vegDry > 70) {
    risk = "High";
  } else if (
    temp >= 30 && temp <= 40 &&
    humidity >= 30 && humidity <= 50 &&
    wind >= 20 && wind <= 40 &&
    vegDry >= 50 && vegDry <= 70
  ) {
    risk = "Medium";
  } else if (
    temp < 30 && humidity > 50 && wind < 20 && vegDry < 50
  ) {
    risk = "Low";
  } else {
    // Optional: if inputs are mixed (e.g., temp high but humidity ok)
    risk = "Medium"; 
  }

  res.json({ risk });
});



app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});