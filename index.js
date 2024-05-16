const { faker } = require('@faker-js/faker');
const { exec } = require('child_process')
const fs = require('fs')
const mongoose = require('mongoose')
try {
    mongoose.connect("mongodb://localhost:27017/personData")
    console.log("Mongodb is on.")
} catch (error) {
    console.log(error)
}
const clients = []
const nameJson = './persons.json'
const dataBaseName = 'personsData'
const collectionName = 'people'
let _id = 1
for (let i = 0; i < 1000; i++) {
    const nome = faker.person.firstName()
    const email = faker.internet.email({firstName: nome}).toLowerCase()
    const numeroTelefone = faker.phone.number()
    const anoNascimento = faker.date.past({years: 30})
    
    let client = {
        _id,
        nome,
        email,
        numeroTelefone,
        anoNascimento
    }

    clients.push(client)
    fs.writeFileSync(nameJson, JSON.stringify(clients), {encoding: 'utf-8'})
    _id++

}
exec(`mongoimport --jsonArray ${nameJson} -d ${dataBaseName} -c ${collectionName}`)
console.log("Thats all!")