// Informe o valor do produto
const valorDoProduto = 55.00

// Informe o valor do desconto (em Percentual)
const percentualDoDesconto = 10.00

// Calculando o valor do desconto
const valorDoDesconto = (percentualDoDesconto * valorDoProduto) / 100

// Subtraia o valor do produto pelo valor do desconto (valor a pagar)
const valorFinalDoProduto = valorDoProduto - valorDoDesconto

// Mostrar valor final do produto
console.log(valorFinalDoProduto)