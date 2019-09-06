playing_board = [["_" for j in range(3)] for i in range(3)]
player = "X"


def Board():
    for i in range(3):
        row = "| "
        for j in range(3):
            row += (playing_board[i][j] + " | ")
        print(row)

def AskMove():
    row = int(input("Which row (1-3)?")) - 1
    col = int(input("Which column (1-3)?")) -1
    return row, col

def Location(player):
    row, col = AskMove()
    playing_board[row][col] = player 
    print(Board())

def SwitchPlayer(player):
    
    if player == "X":
        player = "O"
    elif player == "O":
        player = "X"
    return player

def PlayGame():
    Board()
    global player
    count = 1
    while count <= 9:
        Location(player)
        count +=1
        player = SwitchPlayer(player)

def WinConditions():
    for x in range(3):

        



            


        

      

