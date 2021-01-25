var nome = prompt('Digite o seu nome:')
var altura = prompt('Digite a sua altura em centímetros:')
var peso = prompt('Digite o seu peso:')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura / 100

var imc = peso / (altura * altura)

if (imc < 16) {
	var classificacao = 'Baixo peso muito grave'
} else if (imc >= 16 && imc <= 16.99) {
	var classificacao = 'Baixo peso grave'
} else if (imc >= 17 && imc <= 18.49) {
	var classificacao = 'Baixo peso'
} else if (imc >= 18.50 && imc <= 24.99) {
	var classificacao = 'Peso Normal'
} else if (imc >= 25 && imc <= 29.99) {
	var classificacao = 'Sobrepeso'
} else if (imc >= 30 && imc <= 34.99) {
	var classificacao = 'Obesidade grau I'
} else if (imc >= 35 && imc <= 39.99) {
	var classificacao = 'Obesidade grau II'
} else {
	var classificacao = 'Obesidade grau III'
}

document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como: ' + classificacao)