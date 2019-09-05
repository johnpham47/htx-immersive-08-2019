class User:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
    last_name = 'Smith'

user1 = User("John", 36)
user2 = User("Mary", 34)
print(user1.first_name)
print(user1.age)