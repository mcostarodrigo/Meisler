def encontre_maior_numero(array):
    if not array:
        return None

    maior = array[0]

    for num in array:
        if num > maior:
            maior = num

    return maior


array = [5, 13, 41, 52, 40, 9]
maior_numero = encontre_maior_numero(array)
print(f"O maior número é {maior_numero}.")
