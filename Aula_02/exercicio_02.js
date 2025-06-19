//Sem return 
function calcularValorComTaxa(produto, taxa) {
    const valorFinal = produto + (produto * taxa / 100)
    console.log(valorFinal)
  }
  
  calcularValorComTaxa(100, 15)
  calcularValorComTaxa(250, 10)


//Com return 
function calcularValorComTaxa(produto, taxa) {
    return produto + (produto * taxa / 100)
  }
  
  const valor1 = calcularValorComTaxa(100, 15)
  const valor2 = calcularValorComTaxa(250, 10)
  console.log(valor1)
  console.log(valor2)

//return só pode ser usado dentro de funções (ou métodos).


  