def verificar(a):
    if number > 0:
        return (f'{number} é positivo.')
    elif number < 0:
        return (f'{number} é negativo.')
    else:
        return ('O número é 0.')
    
number = float(input("Digite um número: "))
print(verificar(number))