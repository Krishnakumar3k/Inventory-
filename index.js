const express = require("express");

require("./DB/config"); // DB connection
const office = require("./DB/office.js");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Add data
app.post("/add-data", async (req, res) => {
  try {
    let { systemId, systemName, ownedBy, assignTo } = req.body;
    const values = await office.create({ systemId, systemName, ownedBy, assignTo });
    res.status(200).json({ message: "Data has been added successfully", values });
  } catch (error) {
    res.status(500).json({ error:'error' });
  }
});
// update Data
app.delete('/delete/:_id', async(req,res)=>{
  console.log(req.params)
  let data = await office.deleteOne(req.params)
  res.send(data)
})

// update Data
app.put('/update/:_id', async(req,res)=>{
  console.log(req.params)
  let data = await office.updateOne(
         req.params,
         {$set:req.body }     
  )
  res.send(data);
})       




app.listen(5000, () => {
  console.log("Server is started: Running on Port 5000");
});
