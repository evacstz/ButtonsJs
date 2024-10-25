function verifica() {
    let numero = parseFloat(document.getElementById('numero').value);
    
    let result;
    if (numero > 0) {
        result = ' é positivo.';
        document.getElementById('result').innerHTML = numero + result;
        // console.log(numero + ' é positivo.');
    } else if (numero < 0) {
        result = ' é negativo.';
        document.getElementById('result').innerHTML = numero + result;
        // console.log(numero + ' é negativo.');
    } else {
        result = 'O número é 0.';
        document.getElementById('result').innerHTML = result;
        // console.log('O número é 0.');
    }
}