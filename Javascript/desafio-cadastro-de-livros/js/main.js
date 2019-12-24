function exibirReferencia() {
    let nome = document.getElementById("myForm").elements[0].value[0];
    let sobrenome  = document.getElementById("myForm").elements[1].value;
    let titulo  = document.getElementById("myForm").elements[2].value;
    let edicao  = document.getElementById("myForm").elements[3].value;
    let local = document.getElementById("myForm").elements[4].value;
    let editora = document.getElementById("myForm").elements[5].value;
    let ano = document.getElementById("myForm").elements[6].value;

    document.getElementById("resultado").innerHTML = `${sobrenome.toUpperCase()}, ${nome}. ${titulo.bold()}. Edição: ${edicao}. ${local}: ${editora}, ${ano}.`

    document.getElementById("resultado").style.display = 'block';
}