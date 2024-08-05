const express = require('express');
const app = express();
const bookRoutes = require('./src/books/routes');
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/books', bookRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));