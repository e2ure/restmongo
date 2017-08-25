/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//mongodb://heroku_l4nvh1hr:1bq2rh9lkp2mn0e494gmbrg9sn@ds159033.mlab.com:59033/heroku_l4nvh1hr

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

// Import Models and controllers
var models     = require('./models/formulario')(app, mongoose);

var formularios = require('./routes/formularios'); 
var app = express();
var connection  = require('express-myconnection');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');



//all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

//app.use(mongoose.connect('mongodb://heroku_l4nvh1hr:1bq2rh9lkp2mn0e494gmbrg9sn@ds159033.mlab.com:59033/heroku_l4nvh1hr'));


// Create a schema

/*
app.use(
    
    connection(mysql,{
        
        host: 'us-cdbr-iron-east-05.cleardb.net',
        user: "b2831f68136dcd",
        password: "9654212e",
        database: "heroku_b7f13a831b669f3"
    },'request')
);//route index, hello world*/
    
// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var formuRutes = express.Router();

/*
 * /formularios
 * get: Retorna toda la lista de formularios
 * post: Ingresa un formulario
 */
formuRutes.route('/formularios')
  .get(formularios.findAllForms)
  .post(formularios.save);


/*
 * /formularios/:id
 * get: Retorna un formulario según el id único
 * put: Actualiza el formulario (estructura)
 * delete: Borra el formulario indicado
 */
formuRutes.route('/formularios/:id')
  .get(formularios.findById)
  .put(formularios.update)
  .delete(formularios.delete);

app.use('/api', formuRutes);    
    
//app.get('/', routes.index);//route customer listv
/*app.get('/clientes', clientes.list);//route add customer, get n post
app.get('/clientes/consultar/:id', clientes.edit);
app.post('/clientes/redimir/',clientes.redimir);
app.post('/clientes/acumular/',clientes.acumular);*/
//app.use(app.router);
//app.post('/formularios/save/',formularios.save);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});