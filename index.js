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
function limit(){
    for(let i = 0; i < 4; i++ ){
        for(let x in columns){
            if(columns[x].length == 1){
                for(let y in rows){
                    if((x != y) && (rows[x] == rows[y])){
                        rm_pos(y , columns[x][0])
                    }
                }
            }
        }
    }
}
function total(columns){
    let sum = 0
    for (const x in columns) {
        sum += columns[x].length;
    }
    return sum
}


function nextTo(s1, s2) {
  if (columns[s1].length < columns[s2].length) {
    let a_set = new Set()
    for (let i = 0; i < columns[s1].length; i++) {
      if (columns[s1][i] + 1 <= 4) {
        a_set.add(columns[s1][i] + 1)
      }
      if (columns[s1][i] - 1 >= 0) {
        a_set.add(columns[s1][i] - 1)
      }
    }
    let an_array = columns[s2].filter(x => a_set.has(x))
    columns[s2] = an_array
  }
  else if ((columns[s1].length > columns[s2].length)) {
    let a_set = new Set()
    for (let i = 0; i < columns[s2].length; i++) {
      if (columns[s2][i] + 1 <= 4) {
        a_set.add(columns[s2][i] + 1)
      }
      if (columns[s2][i] - 1 >= 0) {
        a_set.add(columns[s2][i] - 1)
      }
    }
    let an_array = columns[s1].filter(x => a_set.has(x))
    columns[s1] = an_array
  }
}
function leftOf(s1, s3){
  let lowest = columns[s1][0]  
  let greatest = columns[s3][columns[s3].length - 1] 
  let right = columns[s3].filter(x => x > lowest)
  let left = columns[s1].filter(x => x < greatest)
  columns[s3] = right
  columns[s1] = left
}
function sameColumn(s1 , s3){
    const intersection = columns[s1].filter(x => columns[s3].includes(x));
    columns[s1] = intersection
    columns[s3] = intersection
    
}
function between(s1, s2, s3){
    // rm_pos(s2, 0)
    // rm_pos(s2, 4)
    
    // if((columns[s1][0] >= columns[s2][0]) && (columns[s2][0] <= columns[s3][0])){
    //     rm_pos(s2, columns[s2][0])
    // }
    // if((columns[s1][columns[s1].length - 1] <= columns[s2][columns[s2].length - 1]) && (columns[s2][columns[s2].length - 1] >= columns[s3][columns[s3].length - 1])){
    //     rm_pos(s2, columns[s2][columns[s2].length - 1])
    // }
    let left_to_right = false
    let right_to_left = false
    let remove = []
    for(let i = 0; i < columns[s2].length;i++){
        let l_t_r = true 
        let r_t_l = true
        const greater = (x) => x > columns[s2][i];
        const lesser = (x) => x < columns[s2][i];
        if(!(columns[s3].some(greater) && columns[s1].some(lesser))){
            l_t_r = false
        }
        if(!(columns[s1].some(greater) && columns[s3].some(lesser))){
            r_t_l = false
        }
        if(columns[s3].some(greater) && columns[s1].some(lesser)){
            left_to_right = true
        }
        if(columns[s1].some(greater) && columns[s3].some(lesser)){
            right_to_left = true
        }
        if((l_t_r == false) && (r_t_l == false)){
            remove.push(columns[s2][i])
        }
    }
    for(let i = 0; i < remove.length;i++){
        rm_pos(s2, remove[i])
    }
    
    if((left_to_right == true) && (right_to_left == false)){
        //console.log("left to right")
        columns[s1] = columns[s1].filter(x => x < columns[s2][columns[s2].length - 1])
        columns[s3] = columns[s3].filter(x => x > columns[s2][0])
    }else if((right_to_left == true) && (left_to_right == false)){
        //console.log("right to left")
        columns[s1] = columns[s1].filter(x => x > columns[s2][0])
        columns[s3] = columns[s3].filter(x => x < columns[s2][columns[s2].length - 1])
    }else if((left_to_right == false) && (right_to_left == false)){
        //console.log("your code has failed")
    }else if((left_to_right == true) && (right_to_left == true)){
        //console.log("could be both")
    }
}


function clue_reader(clue){
    let s1 = clue[0]
    let s2 = clue[1]
    let s3 = clue[2]
    
    if((s2 == "<") && (s1 != s3)){
        leftOf(s1 , s3)
    }else if((s2 == "^") && (rows[s1] != rows[s3])){
        sameColumn(s1, s3)
    }else if((s1 in columns && s2 in columns && s3 in columns) && ((s1 != s3) && (s2 != s3) && (s2 != s1))){
        between(s1, s2, s3)
    }else if((s1 === s3) && (s1 != s2) && (rows[s1] != rows[s2])){
        nextTo(s1, s2)
    }
}
function puzzle(clues){
    for(let i = 0 ; i < clues.length; i++){
        clue_reader(clues[i])
        limit()
    }
    console.log(total(columns))
    
}


puzzle(clues)
console.log(columns)
puzzle(clues)
console.log(columns)
puzzle(clues)
console.log(columns)
puzzle(clues)
console.log(columns)
puzzle(clues)
console.log(columns)

// clue_reader("MRT")
// limit()
// clue_reader("ABH")
// limit()
// clue_reader("LKO")
// limit()
// clue_reader("OKP")
// limit()
// clue_reader("JIM")
// limit()
// clue_reader("OPE")
// limit()
// clue_reader("GDO")
// limit()
// clue_reader("RAQ")
// limit()
// clue_reader("J^A")
// limit()
// clue_reader("M^P")
// limit()
// clue_reader("A<Q")
// limit()
// clue_reader("D<K")
// limit()
// clue_reader("OQO")
// limit()
// console.log(total(columns))
