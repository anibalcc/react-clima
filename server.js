var express = require('express');

app = express();

const PORT = process.env.PORT || 4000;


app.use(express.static('dist'));

app.listen(PORT,function(){

  console.log('server started '+ PORT);
});
