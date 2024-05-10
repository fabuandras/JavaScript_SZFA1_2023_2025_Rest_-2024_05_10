import { getAdat } from "./async.js";

console.log("Róka Rudi");

getAdat("adatok.json", megjelenit);
getAdat("https://pokeapi.co/api/v2/pokemon/ditto", megjelenitPokemon)

console.log("Balettáncos");


function megjelenit(adat) {
    console.log(adat)
    console.log(adat.termek)
    $("body").append(`<h2>${adat.termek[0].nev}<h2>`)
}


function megjelenitPokemon(adat) {
    console.log(adat)
    $("body").append(`<h1>pokemonok<h1>`)
    $("body").append(`<h2>${adat.name}<h2>`)
    $("body").append(`<img src="${adat.sprites.front_default}" alt="${adat.name}">`)
}



/*
A CallBack függvény olyan függvény,
amely egy másik függvény paramétere,
aszinkon meghívás esetén
*/
