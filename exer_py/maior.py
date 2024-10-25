def verificar(a, b, c):
    if a >= b and a >= c:
        return (f'{num1} é o maior número.')
    elif b >= a and b >= c:
        return (f'{num2} é o maior número.')
    else:
        return (f'{num3} é o maior número.')

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))
print(verificar(num1, num2, num3))