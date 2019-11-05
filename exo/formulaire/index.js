const express = require('express');
      // path = require('path'),
      // morgan = require('morgan'),
const bodyParser = require('body-parser');
const fileUpload=require('express-fileupload')
const app = express();

app.use(bodyParser());

// importing routes
const livreRoutes = require('./route/user');

// settings
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));
// routes
app.use('/', livreRoutes);
app.use('/upload', express.static(__dirname + '/upload'));
// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });

