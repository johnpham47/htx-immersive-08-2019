playing_board = [["_" for j in range(3)] for i in range(3)]
player = "X"
# board = [
#     [0, 0, 0],
#     [0, 0, 0],
#     [0, 0, 0],
# ]
# print(board[0])
# print(board[1])
# print(board[2])

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

def Location():
    row, col = AskMove()
    playing_board[row][col] = player 
    print(Board())

Location()

# def Location():
#     valid = True/False:
#     row, col = AskMove()
#     while not valid:
#         if row <= 0 and row >= 3 and col <= 0 and col >= 3:
#             print("Invalid input. Please select a value between 1 and 3")
#             row, col = AskMove()

#         elif board[row][col] != "_":
#             print("That spot is already taken. Please select another value between 1 and 3")
#             row, col = AskMove()
        
#         else:
#             board[row][col] = player
            


        

      

# def SwitchPlayer():
#     if player == "X":
#         player == "Y"
#     elif player == "Y":
#         player == "X"
#     return player