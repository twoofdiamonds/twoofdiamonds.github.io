const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const ipMap = {};

app.use(bodyParser.json());

app.post('/submit-answer', (req, res) => {
    const ip = req.ip;
    const answer = req.body.answer;

    if (!ipMap[ip]) {
        ipMap[ip] = true;
        // Store the answer in a database or file
        console.log(`Received answer from ${ip}: ${answer}`);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});