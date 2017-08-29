/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var mongoose = require('mongoose'), 
    Schema   = mongoose.Schema;;
 var SchemaFormulario = new Schema({
    etramiteid: String,
    completed: Boolean,
    formulario: String,
    updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Formulario', SchemaFormulario);


