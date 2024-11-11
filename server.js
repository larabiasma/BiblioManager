const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

app.use(express.static('public'));
app.use(bodyParser.json());

const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const bookuserRoutes = require('./routes/bookuser');
const cardRoutes = require('./routes/card');

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookusers', bookuserRoutes);
app.use('/api/card', cardRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'book.html'));
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

app.get('/card', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'card.html'));
});

app.get('/bookusers', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bookuser.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
