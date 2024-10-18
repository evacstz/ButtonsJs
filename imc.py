peso = float(input("Digite seu peso: "))
altura = float(input("Digite sua altura: "))

imc = peso / (altura * altura)

print(f'Seu IMC é: {imc}')

if imc < 18.5:
    print('Abaixo do peso')
elif imc >= 18.5 and imc <= 24.9:
    print('Peso normal')
else:
    print('Sobrepeso')