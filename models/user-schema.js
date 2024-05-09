const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    nome: String,
    email: String,
    numeroTelefone: String,
    anoNascimento: String
})

mongoose.model("people", userSchema)