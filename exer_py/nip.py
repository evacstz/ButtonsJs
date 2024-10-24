def verificar(a):
    if a % 2 == 0:
        return f'O número {number} é par.'
    else:
        return f'O número {number} é ímpar.'

number = int(input("Digite um número: "))
print(verificar(number))