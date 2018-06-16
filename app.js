const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// index route 

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
const port = 4200;

app.get('/', (req, res) => {
    const title = 'Welcome2' ;
    res.render('index', {
        title: title
    });
});

app.get('/about', (req, res) => {

    res.render('About');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
