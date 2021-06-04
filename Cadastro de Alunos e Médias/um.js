let grupo_alunos;
if(localStorage.getItem("alunos") !== null){
    grupo_alunos = JSON.parse(localStorage.getItem("alunos"))
} else {
    grupo_alunos = [];
}
$("#botao1").click(function(){
    grupo_alunos.push({
        rgm : $("#rgm").val(),
        nome : $("#nome").val(),
        media : Number($("#media").val())
    });
    localStorage.getItem("alunos", JSON.stringify(grupo_alunos));
});

$("#botao2").click(function(){
    let saida = `<table border='1'>`;
    saida += `<tr><th>RGM</th> <th>NOME</th> <th>MÉDIA</th> <th>CONCEITO</th> </tr>`;
    for(let aluno of grupo_alunos){
        saida += `<tr> <td>${aluno.rgm}</td>
                       <td>${aluno.nome}</td>
                       <td>${aluno.media}</td>
                       <td>${Conceito(aluno.media)}</td>
                  </tr>`;
    }
    saida += `</table>`;
    $("#relatorio").html(saida);
})

function Conceito(media){
    if(media >= 6){
        return `<span class="aprovado">APROVADO</span>`;
    } else {
        if(media < 1){
            return `<span class="reprovado">REPROVADO</span>`;
        } else {
            return `<span class="exame">AVALIAÇÃO FINAL</span>`;
        }
    }
}