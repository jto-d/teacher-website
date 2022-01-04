const express = require('express');
const path = require('path');

let init_path = path.join(__dirname, "public")

const app = express();
app.use(express.static(init_path));

app.get('/', (req,res) => {
    res.sendFile(path.join(init_path, "index.html"));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(initial_path, "admin.html"));
})

app.listen("3000", () => {
    console.log('listening.......')
})

