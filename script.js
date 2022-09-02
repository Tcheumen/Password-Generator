
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const clipboardEl = document.getElementById('clipboard')
const upercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')


function getRandomLower(){

    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRadomUpper(){

    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){

    return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
}

function getRandomSymbol(){

    const Symbols = "!@#$%^&§*+(){}[]==<>-_.,;:?\|/";
    const index = (Math.floor(Math.random()*Symbols.length));
    return Symbols[index];
}

const randomFunction = {
    lower: getRandomLower,
    upper: getRadomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol

}