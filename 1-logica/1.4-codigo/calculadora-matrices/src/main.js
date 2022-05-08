const matrizA= [
    [5,4,3],
    [3,8,6],
    [9,6,3]
]

const matrizB= [
    [1,2,9],
    [4,7,3],
    [6,8,2]
]

const matrizSuma = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const matrizResta = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const matrizMult = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

//console.log("matriz A : " + matrizA)

// Recorrer la matriz y primeros usos del ciclo for

/* 
for (i=0; i<matrizA.length; i++) {
    for (j=0; j<matrizA.length; j++) {
        console.log(matrizA[j]) 
    }
} 
*/

/* 
for (let j=0; j<matrizB.length; j++) {
    console.log(matrizB[j])
}
*/
/*
// suma de matrices 

for ( let i=0; i<matrizSuma.length; i++) {
    for (let j=0; j<matrizSuma.length; j++) {
        matrizSuma[i][j]= matrizA[i][j] + matrizB[i][j]
            
    }
}
console.log(matrizSuma)


/*
for (let i=0; i<matrizA.length; i++) {
    for (let j=0; j<matrizB.length; j++) {
        console.log(j)
    }
    
}
console.log(i)
*/

// resta de matrices 
/*
for (let x=0; x<matrizResta.length; x++) {
    for (let y=0; y<matrizResta.length; y++) {
         matrizResta[x][y]= matrizA[x][y] - matrizB[x][y]
    }
}
console.log(matrizResta)
*/

// multiplicación de matrices

for (let i=0; i<matrizMult.length; i++) {
    for (let j=0; j<matrizMult.length; j++) {
     for (let k=0; k<matrizMult.length; k++) {
         matrizMult[i][j]=matrizMult[i][j] + (matrizA[i][k] * matrizB[k][j])
     }  

    }

}
console.log(matrizMult)



