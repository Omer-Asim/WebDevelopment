const fs= require('fs');
const superheroes = require('superheroes');



fs.copyFileSync("dosya1.txt","dosya2.txt");

var rastgeleKahraman=superheroes.random();
console.log(rastgeleKahraman);
