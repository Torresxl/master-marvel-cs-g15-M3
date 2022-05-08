


var fibo= [0,1]

function serieFibonacci(limite) {
    for (let i=2; i<=limite; i++) {

        fibo[i] = fibo[i - 2] + fibo[i - 1]
            
    }
    return fibo
}

console.log(serieFibonacci(10))



/*
function fibonacci(numero) {

    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        
        numeros[i] = numeros[i - 2] + numeros[i - 1];

    }
    return numeros;
}

console.log(fibonacci(5))
*/