let numberOne = prompt("Insira o primeiro número")
let numberTwo = prompt("Insira o segundo número")


let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)

alert(`A soma dos números é ${sum}`)
alert(`A subtração dos números é ${sub}`)
alert(`A multiplicação dos números é ${mult}`)
alert(`A divisão dos números é ${div}`)
alert(`O resto da divisão dos números é ${rest}`)

if(numberOne == numberTwo) {
  alert(`Os números inseridos são iguais`)
} else {
  alert(`Os números inseridos são diferentes`)
}

if(sum % 2 == 0) {
  alert(`O número é par`)
} else {
  alert(`O número é ímpar`)
}