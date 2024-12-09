const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const names = []
    names.push("Omar")
    names.push("Abdullah")
    names.push("Dawood")
    names.push("Hey there! This is Sultan!");
    res.send(names);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
