let entrada = document.getElementById('entrada')


function fibonacci(){
    let base_fibonacci = [0,1]

    // tratamento da entrada
    let input = parseInt(entrada.value)

    // calculo fibonacci
    for (var i = 0; i < input; i++) {
        let ultimoValor = base_fibonacci[base_fibonacci.length - 1]
        let penultimoValor = base_fibonacci[base_fibonacci.length - 2]
        let resultado = ultimoValor + penultimoValor
        base_fibonacci.push(resultado);
    }
    
    // checagem do valor de entrada
    let checagem = base_fibonacci.includes(input)
    console.log(`O número ${input} ${checagem ? 'está' : 'não está'} na sequência de Fibonacci.`)

    // criação dos elementos filhos que mostram se o numero faz parte ou não da sequencia de fibonacci
    let minhaSection = document.getElementById('resultados')

    let novoParagrafo = document.createElement('p')

    novoParagrafo.textContent = `O número ${input} ${checagem ? 'está' : 'não está'} na sequência de Fibonacci.`

    minhaSection.appendChild(novoParagrafo)

}
