const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// index route 

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
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
