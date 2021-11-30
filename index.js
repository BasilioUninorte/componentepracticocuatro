const path = require('path'); //Incluye el módulo path
const express = require('express') //Framework
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (pet, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/suma', (pet, res)=>{
    const{a,b} = pet.body;
    let result = a + b
    res.send({result:result})
    //console.log(result) 
})

app.listen(5000, ()=>{
    console.log("Servidor escuchando por el puerto 5000");
})