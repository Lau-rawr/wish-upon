const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //helps us to connect to mongodb database
//added
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

require('dotenv').config(); //so that we can have environment variables in the dotenv file

const app = express(); // used to create our express server
const port = process.env.PORT || 5000; // localhost 5000 is our route url

app.use(cors());
app.use(express.json()); //setting up middleware - allows to parse JSON cause server is sending and receiving JSON
//added
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

const uri = process.env.ATLAS_URI; //database uri
// connects us to mongodb
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const imageRouter = require('./routes/images');
const usersRouter = require('./routes/users');
const userImageRouter = require('./routes/user_images');
const imageTwoRouter = require('./routes/image');

// app.use('/images', imageRouter);
app.use('/users', usersRouter);
app.use('/user_images', userImageRouter);
app.use('/image', imageTwoRouter);

// for heruko
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '..', 'build', "index.html"));
  });
};

app.listen(port, () => { //starts the server
    console.log(`Server is running on port: ${port}`);
});
