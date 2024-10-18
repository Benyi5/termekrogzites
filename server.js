const express = require('express');
const app = express;
const port = 3000;
const cors = require('cors'); 
const { text } = require("body-parser");
app.use(cors({origin: 'http://localhost:3000'}));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); 

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false }))

// A gyümölcs hozzáadásánál
let errors = [];
let data = [];
let succes = true;

let fruits = [];

app.get('/', (req,res) => {
    console.log(__dirname);
    res.status(201).sendFile(__dirname + '/public/index.html');
});





app.post('/fruit', (req, res, next) => {
    let fruit = req.body;
    fruits.push(fruit);
} )




// Gyümölcs adatai: 
// -- megnevezés (min 5 char)
// -- egysgár (>1)
// -- mennyiségi egység ('kg', 'db')
    
    // mertekegysegek tömb (vagy "kg" vagy "db")
    const mertekegysegek = [];
    let eredmeny = mertekegysegek.includes('kg', 'db');

// -- mennyiség (>0)


// Gyümölcs hozzáadása: 
app.get('/ujgyumi', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8')
    res.status(201).sendFile(__dirname + '/public/index.html')
});

app.post('/ujgyumi', (req, res) => {
    res.header('Content-Type', 'application/json') // -- nested json visszaküldése
    let user = req.body; // -- JSON adatokat visszaadja
    console.log(req.body)
    if (user.password != user.password2) {
        succes = false;
        errors.push('A jelszavak nem egyeznek') 
    }
    if (user.password.length < 5) {
        succes = false;
        errors.push('A jekszavak hossza 5 karakter-nél nagyobbnak kell lennie')
    }
    if (succes) {
        data.push(user);
        res.status(201).send({succes: true, data: data, errors: errors});
    }else{
        res.status(201).send({succes: false, data: data, errors: errors});
    }
});





// Gyümölcs megjelenítése
app.get('/gyumik', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8')
    res.status(201).sendFile(__dirname + '/public/index.html')
});


// Visszajelzés!






app.listen(port, () => {
    console.log(`Port: ${port}`);
});
