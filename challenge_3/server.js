const express = require('express');

const app = express();


app.use(express.static('public'));


const PORT = process.env.PORT || 3000;


app.listen(PORT, (err) => {
  if (err) {
    console.log('Could not connect the server: ', err)
  } else {
    console.log('App listening on port: ', PORT)
  }
})

