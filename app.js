const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res) => {
  const names = [];
  names.push("Abdullah");
  names.push("Moudhi");
  names.push("Omar")
   names.push("Dawood")
  names.push("Hey there! This is Sultan!");
  names.push("Abdullah Al Abbas");
  res.send(names);

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
