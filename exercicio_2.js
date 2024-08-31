let entrada_ = document.getElementById('texto')

function contagem(){
    
    let extrai_valor = entrada_.value
    let separador = extrai_valor.split("")
    
    let a_maiusculo = 0
    let a_minusculo = 0
    for (let valor of separador) {

        if (valor == "A" || valor == "Ã" || valor == "Â" || valor == "Á" || valor == "À"){
            a_maiusculo++
        }
        else if(valor == "a" || valor == "ã" || valor == "â" || valor == "á" || valor == "à"){
            a_minusculo++
        }

    }

    console.log("quantidade de 'A' é: "+a_maiusculo)
    console.log("quantidade de 'a' é: "+a_minusculo)

    
    // criação dos elementos filhos que mostram se o numero faz parte ou não da sequencia de fibonacci
    let minhaSection = document.getElementById('resultados')

    let palavra_entrada = document.createElement('h4')

    let paragrafo_maior = document.createElement('p')

    let paragrafo_menor = document.createElement('p')

    palavra_entrada.textContent = "Para a palavra: "+extrai_valor

    paragrafo_menor.textContent = "Quantidade de 'a' é: "+a_minusculo

    paragrafo_maior.textContent = "Quantidade de 'A' é: "+a_maiusculo

    minhaSection.appendChild(palavra_entrada)
    minhaSection.appendChild(paragrafo_maior)
    minhaSection.appendChild(paragrafo_menor)

}


palavra_entrada.textContent = ''

paragrafo_menor.textContent = ''

paragrafo_maior.textContent = ''

