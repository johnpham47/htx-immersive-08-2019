# class User:
#     def __init__(self, first_name, age):
#         self.first_name = first_name
#         self.age = age
#     last_name = 'Smith'

# user1 = User("John", 36)
# user2 = User("Mary", 34)
# print(user1.first_name)
# print(user1.age)

def remove_duplicate(list):
    final_list = []
    for name in list:
        if name not in final_list:
            final_list.append(name)
    return final_list

list = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

print(remove_duplicate(list))