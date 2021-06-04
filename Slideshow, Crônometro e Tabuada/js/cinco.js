$("#btn1").click(function(){
    $("#cronometro").show();
    $("#slideshow").hide();
    $("#tabuada").hide();
})
$("#btn2").click(function(){
    $("#cronometro").hide();
    $("#slideshow").show();
    $("#tabuada").hide();
})
$("#btn3").click(function(){
    $("#cronometro").hide();
    $("#slideshow").hide();
    $("#tabuada").show();
})
$("#calctab").click(function(){
    let num_tab = Number($("#tab").val());
    let saida = "";
    for(let i=0; i<=10; i++){
        saida += `${num_tab} X ${i} = ${num_tab * i} <br>`;
    }
    $("#res").html(saida);
})

setInterval(cronom, 1000);

function cronom(){
    let x = Number($("#cronometro").html());
    x++;
    $("#cronometro").html(x);
}

let img_maxima = 5;
let cont = 1;
$("#anterior").click(function(){
    if(cont == 1){
        cont = img_maxima;
    } else {
        cont--;
    }
    $("#imagem").attr("src", "imagens/img"+cont+".png");
})
$("#proximo").click(function(){
    if(cont == img_maxima){
        cont = 1;
    } else {
        cont++;
    }
    $("#imagem").attr("src", "imagens/img"+cont+".png");
})