#Exercise 1
# def madlib(name, subject):
#     print(name + '\'s favorite subject is ' + subject)

# madlib('John', 'Writing')

#Exercise 2 
# def Fahrenheit(degrees):
#    return (9 / 5) * degrees + 32
    
# print(f'It is {Fahrenheit(100)} degrees out today!')

#Exercise 3 HARD
# def Celsius(degrees):

#Exercise 4 

# def check_evenodd(number):
#     return (number % 2 == 0)

# user_input = int(input('Enter a number to check for odd or even: '))
# check_evenodd(user_input)

# if check_evenodd(user_input) == True:
#     print('That is an even number.')
# #Exercise 5
# def is_odd(number):
#     return not check_evenodd(number)
# elif not check_evenodd(user_input):
#     print('That is an odd number.')

# def checkodd(user_input):
#     return not is_even(user_input)

#Exercise 6
# def only_evens(list_of_numbers):
#     result = []
#     for number in list_of_numbers:
#         if check_evenodd(number):
#             result.append(number)
#     return result


# only_evens([11, 20, 42, 97, 23, 10])


# def only_odd(list_of_numbers):
#     result = []
#     for number in list_of_numbers:
#         if not check_evenodd(number):
#             result.append(number)
#     return result

# only_odd([11, 20, 42, 97, 23, 10])







# Exercise 7
# def only_odds(list_of_numbers):
#     result = []
#     for number in list_of_numbers:
#         if check_evenodd(number):
#             result.append(number)
#     return result


# only_odds([11, 20, 42, 97, 23, 10])

# def list_filter(list_of_numbers, odd_or_even):
#     result = []
#     for number in list_of_numbers:
#         if odd_or_even(number) == 'odd':
#             result.append(number)
#         elif odd_or_even == 'even':
#             if check_evenodd(number):
#                 return result

#Medium Exercises

#Exercise 1: Find the smallest number
def smallest(number_list):
    return min(number_list)

print(smallest([1, 2, 3, 4, 5]))

def largest(number_list):
    return max(number_list)

print(largest([1, 2, 3 , 4 ,5]))

def shortest (word_list):
    return min(word_list, key=len)
    

print(shortest(['Bobby', 'Brandon', 'Steven', 'Sean']))

def longest (word_list):
    return max(word_list, key=len)

print(longest(['Bobby', 'Brandon', 'Steven', 'Sean']))