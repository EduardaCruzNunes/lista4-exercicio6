var numeros = [];
var numerosNumber = [];
let numbers = 0;
let parar = 'nao';
var max = 0;
var min = 0;

while (numeros.length < 3) {
    numbers = prompt('Usuário, digite três números:');
    console.log(`${numbers}`);
    numeros.push(numbers);
}

while (parar != 'sim') {
    parar = prompt('Para parar digite sim :');
    numeros.push(numbers);
}

const identifiqueOmaiorNumero = () => {
    numerosNumber = numeros.map(Number);
    max = Math.max(...numerosNumber);
    return `Caro usuário ${max}, é o maior número!`;
}
console.log(identifiqueOmaiorNumero());

const identifiqueOmenorNumero = () => {
    numerosNumber = numeros.map(Number);
    min = Math.min(...numerosNumber);
    return `Caro usuário ${min}, é o menor número!`;
}
console.log(identifiqueOmenorNumero());