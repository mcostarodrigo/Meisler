var maiorNumero= 0
var lista = [55, 60, 10, 15]
for(i = 0; i < lista.length; i++){
    if(lista[i] > maiorNumero) {
        maiorNumero = lista[i]
    }
}

console.log(maiorNumero)