const express = require('express');
const app = express();
// index route 

const port = 4200;

app.get('/', (req, res) => {

    res.send('INDEX');
});

app.get('/about', (req, res) => {

    res.send('ABOUT');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
