const express = require('express');
const app =express();
// index route 
app.get('/', (req, res) => {
    res.send('INDEX');
});

const port = 4200;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// about route
app.get('/about', (req, res) => {
    res.send('About');
});

// hello route
app.get('/hello', (req, res) => {
    res.send('hello');
});