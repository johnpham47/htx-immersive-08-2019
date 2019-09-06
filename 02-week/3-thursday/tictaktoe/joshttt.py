board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

rows = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
]
columns = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
]
rows = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
]
all_possible_combos = [row, column, diagonal]

def check_win(current_player):
    for group in all_possible_combos:
        in_a_row = 0
        for combo in group:
        #if three in a row
        return True
    return False

def place_position(position, current_player):
    positions = {
        "1": board[0][0] 
        "2": board[0][1]
        "3": board[0][2]
        "4": board[1][0]
        "5": board[1][1]
        "6": board[1][2]
        "7": board[2][0]
        "8": board[2][1]
        "9": board[2][2]
    }
    positions[position] = current_player
def take_turn(current_player):
    place_position = int(input('Choose your position [1-9]'))
    #decide on X
    #decide on Y
    #placing my symbol on (x, y)
    #check if I won
    return

def switch_players(current_player):
    if current_player == 'X':
        return 'O'
    elif current_player == 'O':
        return 'X'

def play_game():
    current_player = 'X' #Changes from X to O
    no_winner = False
    winner = ''
    while no_winner:
        
        #Take Turn
        take_turn()
        if check_win(current_player):
            winner = current_player
        #Switch to other player
        current_player = switch_player(current_player)
    print(f'Player {winner} is the Winner!!')
