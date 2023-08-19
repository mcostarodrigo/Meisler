var maiorNome = ''
var lista = ['Henrique', 'Rodrigo', 'Amanda', 'Gisele']
for(i = 0; i < lista.length; i++){
    if(lista[i].length > maiorNome.length){
        maiorNome = lista[i]
    }
}
console.log(maiorNome)
