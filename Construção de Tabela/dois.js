let l = Number(prompt("Quantidade de linhas: "));
let c = Number(prompt("Quantidade de colunas: "));
let tab = "<table>";

for (let i = 1; i <= l; i++){
    tab += "<tr>";
    for (let j = 1; j <= c; j++){
        let cores = (j % 2 == 0)? "rosa" : "azul";
        tab += `<td class="${cores}">${i},${j}</td>`;
    }
    tab += "</tr>"
}

document.querySelector("#tabela").innerHTML = tab;