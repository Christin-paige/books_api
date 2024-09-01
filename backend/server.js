const express = require('express');
const app = express();
const bookRoutes = require('./src/books/routes'); //this is the router created in routes.js, now importing into express
const port = 3000;

//middleware
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/books', bookRoutes); //route that leads to the bookRoutes

app.listen(port, () => console.log(`app listening on port ${port}`));