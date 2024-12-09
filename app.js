const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const names = []
    names.push("Abdullah")
    res.send(names);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});