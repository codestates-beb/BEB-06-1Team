import express from "express";


const app = express();

app.get("/getthedata", function (req, res) {
  res.send("Hello World");
});



app.listen(3030);
