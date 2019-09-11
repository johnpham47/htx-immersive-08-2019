# phonebook_dict = {
#   'Alice': '703-493-1834',
#   'Bob': '857-384-1234',
#   'Elizabeth': '484-584-2923'
# }
# phonebook_dict["Kareem"] = '968-345-2345'
# print(phonebook_dict)

# phonebook_dict.pop('Alice')
# print(phonebook_dict)

# phonebook_dict['Bob'] = '968-345-2345'
# print(phonebook_dict)

ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
     {
       'name': 'Jasmine',
       'email': 'jasmine@yahoo.com',
       'interests': ['photography', 'tennis']
     },
     {
        'name': 'Jan',
        'email': 'jan@hotmail.com',
        'interests': ['movies', 'tv']
     }
    ]
}
print('Email: ', ramit.get('email'))
print('Interests: ', ramit.get('interests')[0])
print('Jasmine\'s email: ', ramit.get('friends')[0]['email'])
print('Jan\'s interest: ', ramit.get('friends')[1]['interests'][1])