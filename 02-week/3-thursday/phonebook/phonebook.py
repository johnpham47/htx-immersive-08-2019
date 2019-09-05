# Electronic Phone Book
# =====================
# 1. Look up an entry
# 2. Set an entry
# 3. Delete an entry
# 4. List all entries
# 5. Quit

import menu
import data
import look_up
from look_up2 import lookup_by_name

selection = menu.menu_options()

while selection != 5:
    if selection == 1:
        # 1. Look up an entry
        results = lookup_by_name(
            input('What name do you want to look up? ')
        )
        print('The following items were found:')
        look_up.view_entries(results)

    # elif selection == 2:    
        #2. Add an entry
