let n = [];
document.querySelector("#botao").addEventListener("click", function(){
    sort();
});

function sort(){
    for(i = 0; i < 30; i++){
        n[i] = Math.round(Math.random() * 200);
    }
    imprimirVet();
    somapar();
}
function imprimirVet(){
    var res = '';
    var i = 0;
    do{
        res += n[i] + " | ";
        i++;
    } while(i < 30);
    document.getElementById("sorteio").innerHTML = res;
}
function somapar(){
    var som = '';
    var soma = 0;
    for(i = 0; i < 30; i++){
        if(n[i] % 2 == 0){
            soma = soma + n[i];
        }
    }
    som = soma;
    document.getElementById("npares").innerHTML = som;
}