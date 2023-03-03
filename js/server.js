const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
var path = require('path');

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

const PORT = process.env.PORT || 3010;
var server = app.listen(PORT, () => {
    console.log(`server running on port 3010`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});