/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    /*var id = input.id;
    var puntos =input.puntos;*/
    
    var SchemaFormulario = new mongoose.Schema({
        id: String,
        completed: Boolean,
        formulario: String,
        updated_at: { type: Date, default: Date.now }
    });
      // Create a model based on the schema
    var Formulario = mongoose.model('Formulario', SchemaFormulario);
    
    var form=new Formulario({
        id=1,
        complete:false,
        formulario:req
    });
    
    console.log(req.body);
    form.save(function(err){
        if(err)
          console.log(err);
        else
          console.log(todo);
      });
};