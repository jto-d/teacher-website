const express = require('express');
const path = require('path');

let init_path = path.join(__dirname, "src")

const app = express();
app.use(express.static(init_path));

app.get('/', (req,res) => {
    res.sendFile(path.join(init_path, "calendar.html"));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(initial_path, "admin.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initial_path, "login.html"));
})

app.listen("3000", () => {
    console.log('listening.......')
})

