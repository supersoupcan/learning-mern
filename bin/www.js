var app = require('../server/server');

app.listen(process.env.PORT, function (){
    console.log('app running at ' + 'https://mern-supersoupcan.c9users.io/');
});