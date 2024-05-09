const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose')
try {
    mongoose.connect("mongodb://localhost:27017/personData")
    console.log("Mongodb is on.")
} catch (error) {
    console.log(error)
}

 const userSchema = mongoose.Schema({
    nome: String,
    email: String,
    numeroTelefone: String,
    anoNascimento: String
})

mongoose.model("people", userSchema)


for (let i = 0; i < 20; i++) {

    try {
        const alguem = mongoose.model('people')
        new alguem({
            nome: faker.person.firstName(),
            email: faker.internet.email().toLowerCase(),
            numeroTelefone: faker.phone.number(),
            anoNascimento: faker.date.past({years: 30})
        }).save()
        } catch (error) {
            console.log(error)
        }

}
console.log("Thats all!")