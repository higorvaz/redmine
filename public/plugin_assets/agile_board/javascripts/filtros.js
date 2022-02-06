function filterBoard() {
    var versao_selecionada = document.getElementById("versoes").value;
    var usuario_selecionado = document.getElementById("usuarios").value;
    var tipo_selecionado = document.getElementById("tipos").value;

    for (var atividade of document.getElementsByClassName("atividade")){
        if((versao_selecionada === "" || atividade.getAttribute("data-version-id") == versao_selecionada) &&
           (usuario_selecionado === "" || atividade.getAttribute("data-user-id") == usuario_selecionado) &&
           (tipo_selecionado === "" || atividade.getAttribute("data-type-id") == tipo_selecionado)) 
             atividade.style.display = "inline-block";
    	else atividade.style.display = "none";
    }
}

