function verifica() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    let maior;
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
        // console.log('O maior número é ' + maior)
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
        // console.log('O maior número é ' + maior)
    } else {
        maior = num3;
        // console.log('O maior número é ' + maior)
    }

    document.getElementById('result').innerHTML = 'O maior número é ' + maior
}