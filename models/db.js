const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/UserDb');
mongoose.connection.on('error', error => {
    console.error('Database connection error:', error);
  });
  
  mongoose.connection.once('open', () => {
    console.log('Connected to the database');
  
  });
      

require('./user.model')
