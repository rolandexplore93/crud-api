const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})