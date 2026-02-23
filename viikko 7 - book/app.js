var express = require('express');
var path = require('path');


var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');
var userRouter = require('./routes/user');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
