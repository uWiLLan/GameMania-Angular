$(document).ready(function() {
    let slidAtual = 1
    let listaSlide = ["banner0", "banner1", "banner2"]
    
    setInterval(mudarSlide, 3000)
    
    function mudarSlide() {
        if (slidAtual > 0) {
            $("#carrossel").removeClass(listaSlide[slidAtual - 1])
        } else {
            $("#carrossel").removeClass(listaSlide[(listaSlide.length - 1)])
        }
        $("#carrossel").addClass(listaSlide[slidAtual])
        slidAtual++
        if (slidAtual > (listaSlide.length - 1)) {
            slidAtual = 0
        }
    }
})




function produtoIndisponivel() {
    alert ("Produto indisponível😢");
}

function pesquisaIdisponivel() {
    let pesquisa = document.getElementById ("campo-pesquisa") .value
    alert("Não encontramos nenhum resultado para "+ pesquisa +"😢")
}

function mostrarMenu() {
    let hamConteudo = document.getElementById("hamConteudo")

    if (getComputedStyle(hamConteudo).display == 'none'){
        hamConteudo.style.display = 'flex';
    } else {
        hamConteudo.style.display = 'none';
    }
}

