//Sem return
function calcularMediaSemReturn(a, b, c) {
    const soma = a + b + c
    const media = soma / 3
    console.log("A média é:", media)
  }
  
  // Chamadas:
  calcularMediaSemReturn(5, 10, 25)
  calcularMediaSemReturn(20, 40, 60)
  calcularMediaSemReturn(7, 9, 3)
  
//Com return (Desenhando a função)
function calcularMedia(a, b, c) {
    const soma = a + b + c
    const media = soma / 3
    return media
  }
//Usando a função!
  const resultado = calcularMedia(5, 10, 25)
  console.log("O valor médio é:", resultado)
  