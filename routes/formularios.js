/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require('mongoose');
var Formulario = mongoose.model('Formulario');

exports.save = function(req,res){
    
    mongoose.connect('mongodb://heroku_l4nvh1hr:1bq2rh9lkp2mn0e494gmbrg9sn@ds159033.mlab.com:59033/heroku_l4nvh1hr');
    
    var input = JSON.parse(JSON.stringify(req.body));
    /*var id = input.id;
    var puntos =input.puntos;*/
    
    console.log(req.body);
    var form=new Formulario({
        id:"1",
        complete:false,
        formulario:JSON.stringify(req.body)
    });
    
    console.log(req.body);
    form.save(function(err){
        if(err)
          console.log(err);
        else
          console.log(form);
      });
      
      res.json(form);
};