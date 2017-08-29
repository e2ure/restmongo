/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require('mongoose');
var Formulario = mongoose.model('Formulario');

exports.save = function(req,res,body){
    
    
    
    
    console.log(req.body.html);
    var form=new Formulario({
        etramiteid:"1",
        complete:false,
        formulario:req.body.html
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

//GET - Return all tvshows in the DB
exports.findAllForms = function(req, res) {
	Formulario.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /formularios')
        res.status(200).jsonp(tvshows);
    });
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Formulario.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /formularios/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};

exports.findByEtramite = function(req, res) {
	Formulario.findOne({'etramiteid':req.params.id}, function(err, form) {
    if(err) return res.send(500, err.message);

    console.log('GET /formularios/etramite/' + req.params.id);
		res.status(200).jsonp(form);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	Formulario.findById(req.params.id, function(err, form) {
		form.etramiteid   = req.body.id;
		form.complete    = req.body.complete;
		form.formulario = req.body.formulario;
		/*form.poster  = req.body.poster;
		form.seasons = req.body.seasons;
		form.genre   = req.body.genre;
		form.summary = req.body.summary;*/

		form.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(form);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.delete = function(req, res) {
	Formulario.findById(req.params.id, function(err, tvshow) {
		tvshow.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
