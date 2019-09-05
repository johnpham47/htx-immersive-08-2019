def prompt():
    return int(input('Please select 1-5: '))

def menu_display():
    print('Electronic Phone Book')
    print('======================')
    print('1. Look up an entry')
    print('2. Set an entry')
    print('3. Delete an entry')
    print('4. List all entries')
    print('5. Quit')

def menu_options():
    menu_display()
    return prompt()
