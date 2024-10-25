function calcular() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);  

    let imc = peso / (altura * altura);

    document.getElementById('resultado').innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById('categoria').innerHTML = 'Você está abaixo do peso.'
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('categoria').innerHTML = 'Seu peso está normal.'
    }

    else {
         document.getElementById('categoria').innerHTML = 'Você está acima do peso.'
    }
}