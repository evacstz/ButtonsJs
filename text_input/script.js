function calcular() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);  

    let imc = peso / (altura * altura);

    document.getElementById('resultado').innerHTML = 'Seu IMC é:' + imc.toFixed(2);
}