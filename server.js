let superheroes = require('superheroes');

//console.log(superheroes.all;

/* console.log(superheroes.random());

// цикл (покажи все элементы массива)
superheroes.all.forEach(hero => {
    console.log(hero);
}); */

let supervillains = require('supervillains');
 
//console.log(supervillains.all);

/* supervillains.all.forEach(supervillain => {
    console.log(supervillain);
}); */

console.log(supervillains.random());

console.log(`${superheroes.random()} fight ${supervillains.random()}`);

console.log(superheroes.random(), 'fight with' , supervillains.random());