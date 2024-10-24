def verificar(a, b, c):
    if a > b and a > c:
        print(f'{num1} é o maior número.')
    elif b > a and b > c:
        print(f'{num2} é o maior número.')
    elif c > a and c > b:
        print(f'{num3} é o maior número.')
    else:
        print('Os números são iguais.')

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))
print(verificar(num1, num2, num3))

# meu deus tenho que corrigir isso, tá paia