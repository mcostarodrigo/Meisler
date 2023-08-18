//var maiorNumero= 0
//var lista = [55, 60, 10, 15]
//for(i = 0; i < lista.length; i++){
    //if(lista[i] > maiorNumero) {
      //  maiorNumero = lista[i]
    //}
//}

//console.log(maiorNumero)

const maiorNumerodoArray = [5, 8, 2, 11, 4, 9]

function maiorNumerodoArray(nums){
    let maiorNumeroAteAgora = nuns [0]

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > maiorNumeroAteAgora) {
            maiorNumeroAteAgora= nuns[i]
        }
    }

    return maiorNumeroAteAgora

}