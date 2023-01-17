let clues = ["MRT", "ABH", "LKO", "OKP", "JIM", "OPE", "GDO", "RAQ", "J^A", "M^P", "A<Q", "D<K", "OQO"]
let columns = {
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
let rows = {
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
    if(columns[letter].indexOf(number) !== -1){columns[letter].splice(columns[letter].indexOf(number) , 1)}
    return columns[letter]
} //

function leftOf(s1, s3){
    
}
function sameColumn(s1 , s3){
    if (columns[s1].length > columns[s3].length){
        columns[s1] = columns[s3]
    }else if (columns[s3].length > columns[s1].length){
        columns[s3] = columns[s1]
    }
}
function between(s1, s2, s3){
    rm_pos(s2, 0)
    rm_pos(s2, 4)
    
}

function total(columns){
    let sum = 0
    for (const x in columns) {
        sum += columns[x].length;
    }
    return sum
}
function clue_reader(clue){
    let s1 = clue[0]
    let s2 = clue[1]
    let s3 = clue[2]
    
    if(s2 == "<"){
        leftOf(s1 , s3)
    }else if((s2 == "^") && (rows[s1] != rows[s3])){
        sameColumn(s1, s3)
    }else if((s1 in columns && s2 in columns && s3 in columns) && ((s1 != s3) && (s2 != s3) && (s2 != s1))){
        between(s1, s2, s3)
    }
}
function puzzle(clues){
    for(let i = 0 ; i < clues.length; i++){
        clue_reader(clues[i])
    }
    console.log(total(columns))
    
}

puzzle(clues)
console.log(columns)

//console.log(columns["M"])
//console.log(columns["P"])
//console.log(columns["J"])
//console.log(columns["A"])
