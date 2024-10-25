function verifica() {
    let numero = parseInt(document.getElementById('numero').value);
    if (numero % 2 === 0) {
        document.getElementById('result').innerHTML = numero + ' é par.'
        // console.log(numero + ' é par.');
    } else {
        document.getElementById('result').innerHTML = numero + ' é ímpar.'
        // console.log(numero + ' é ímpar.');
    }
}