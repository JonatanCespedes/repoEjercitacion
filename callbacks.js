function sumar(a, b){
    return a + b
}

function calculadora(a, b, callback){
    return callback(a, b)
}

console.log(calculadora(1, 2, sumar))