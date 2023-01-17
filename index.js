let grid = {
    "A": [0, 1, 2, 3, 4],
    "B": [0, 1, 2, 3, 4],
    "C": [0, 1, 2, 3, 4],
    "D": [0, 1, 2, 3, 4],
    "E": [0, 1, 2, 3, 4],
    "F": [0, 1, 2, 3, 4],
    "G": [0, 1, 2, 3, 4],
    "H": [0, 1, 2, 3, 4],
    "I": [0, 1, 2, 3, 4],
    "J": [0, 1, 2, 3, 4],
    "K": [0, 1, 2, 3, 4],
    "L": [0, 1, 2, 3, 4],
    "M": [0, 1, 2, 3, 4],
    "N": [0, 1, 2, 3, 4],
    "O": [0, 1, 2, 3, 4],
    "P": [0, 1, 2, 3, 4],
    "Q": [0, 1, 2, 3, 4],
    "R": [0, 1, 2, 3, 4],
    "S": [0, 1, 2, 3, 4],
    "T": [0, 1, 2, 3, 4]
} //
let column = {
    "A" : 0,
    "B" : 0,
    "C" : 0,
    "D" : 0,
    "E" : 0,
    "F" : 1,
    "G" : 1,
    "H" : 1,
    "I" : 1,
    "J" : 1,
    "K" : 2,
    "L" : 2,
    "M" : 2,
    "N" : 2,
    "O" : 2,
    "P" : 3,
    "Q" : 3,
    "R" : 3,
    "S" : 3,
    "T" : 3,
} //

function rm_pos(letter, number){
    if(grid[letter].indexOf(number) !== -1){grid[letter].splice(grid[letter].indexOf(number) , 1)}
    return grid[letter]
} //


console.log(grid["A"])
console.log(rm_pos("A" , 0))
console.log(rm_pos("A" , 4))
console.log(rm_pos("A", 5))