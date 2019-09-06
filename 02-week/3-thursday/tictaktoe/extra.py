# board = [
#     [0, 0, 0],
#     [0, 0, 0],
#     [0, 0, 0],
# ]
# print(board[0])
# print(board[1])
# print(board[2])

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