def find_largest_number(arr):
    if not arr:
        return None

    largest = arr[0]

    for num in arr:
        if num > largest:
            largest = num

    return largest


input_array = [5, 13, 2, 11, 40, 9]
largest_number = find_largest_number(input_array)
print(f"The largest number is {largest_number}.")
