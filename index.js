let clues1 = ["MRT", "ABH", "LKO", "OKP", "JIM", "OPE", "GDO", "RAQ", "J^A", "M^P", "A<Q", "D<K", "OQO"] //EDBACGHIJFLMKONSPRTQ
let clues2 = ["KLA", "JAB", "FJH", "CMF", "AQT", "GBN", "MAF", "Q^B", "J^E", "R^A", "M<R", "E<N", "N<F", "AMA", "MCM", "EPE"] //CEABDHJIFGOMNLKPSRQT
let clues3 = ["PBJ", "KDO", "DHG", "AOR", "INM", "EMB", "GTD", "O^T", "P<Q", "T<P", "A<L", "P<F", "RIR", "IDI"] //CDBAEIJHGFKNOMLSRTPQ
let clues4 = ["EMJ", "DJO", "AMN", "ADC", "CIL", "END", "GQS", "SAB", "Q<B", "RPR", "SAS", "FNF", "NPN", "SCS"] //ECDABFHIJGKNMLOPRSQT
let clues5 = ["LCI", "CQH", "NOF", "AEC", "APG", "NGL", "EQB", "F^P", "M^S", "E<J", "B<F", "T<P", "F<A", "P<K", "S<Q", "LCL"] //BDCEAHIGFJMNOLKSQTPR

function solve(clues){
    let row1 = { 0: ["A", "B", "C", "D", "E"], 1: ["A", "B", "C", "D", "E"], 2: ["A", "B", "C", "D", "E"], 3: ["A", "B", "C", "D", "E"], 4: ["A", "B", "C", "D", "E"] }
    let row2 = { 0: ["F", "G", "H", "I", "J"], 1: ["F", "G", "H", "I", "J"], 2: ["F", "G", "H", "I", "J"], 3: ["F", "G", "H", "I", "J"], 4: ["F", "G", "H", "I", "J"] }
    let row3 = { 0: ["K", "L", "M", "N", "O"], 1: ["K", "L", "M", "N", "O"], 2: ["K", "L", "M", "N", "O"], 3: ["K", "L", "M", "N", "O"], 4: ["K", "L", "M", "N", "O"] }
    let row4 = { 0: ["P", "Q", "R", "S", "T"], 1: ["P", "Q", "R", "S", "T"], 2: ["P", "Q", "R", "S", "T"], 3: ["P", "Q", "R", "S", "T"], 4: ["P", "Q", "R", "S", "T"] }
    let grid = [row1, row2, row3, row4]
    
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
}
    let rows = {
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
    "E": 0,
    "F": 1,
    "G": 1,
    "H": 1,
    "I": 1,
    "J": 1,
    "K": 2,
    "L": 2,
    "M": 2,
    "N": 2,
    "O": 2,
    "P": 3,
    "Q": 3,
    "R": 3,
    "S": 3,
    "T": 3
}
    
    function alternate(letter){
        let original = [0, 1, 2, 3, 4]
        let remove = original.filter(x => !(columns[letter].includes(x)))
        for(let item of remove){
            rm_pos(letter, item)
        }
    }
    function rm_pos(letter, number) {
        if (columns[letter].indexOf(number) !== -1) {
            columns[letter].splice(columns[letter].indexOf(number), 1)
    
        }
    
        if (/[A-E]/.test(letter)) {
            if (row1[number].indexOf(letter) !== -1) { row1[number].splice(row1[number].indexOf(letter), 1) }
        }
        else if (/[F-J]/.test(letter)) {
            if (row2[number].indexOf(letter) !== -1) { row2[number].splice(row2[number].indexOf(letter), 1) }
        }
        else if (/[K-O]/.test(letter)) {
            if (row3[number].indexOf(letter) !== -1) { row3[number].splice(row3[number].indexOf(letter), 1) }
        }
        else if (/[P-T]/.test(letter)) {
            if (row4[number].indexOf(letter) !== -1) { row4[number].splice(row4[number].indexOf(letter), 1) }
        }
    }
    function limit() {
        for (let i = 0; i < 4; i++) {
            for (let x in columns) {
                if (columns[x].length == 1) {
                    for (let y in rows) {
                        if ((x != y) && (rows[x] == rows[y])) {
                            rm_pos(y, columns[x][0])
                        }
                    }
                }
            }
        }
        for (let i = 0; i < grid.length; i++) {
            for (let x in grid[i]) {
                if (grid[i][x].length == 1) {
                    for (let y in grid[i]) {
                        if (x != y) {
                            rm_pos(grid[i][x][0], Number(y))
                        }
                    }
                }
                else if (grid[i][x].length == 2) {
                    for (let y in grid[i]) {
                        if ((x != y) && ((grid[i][y].length == 2) && ((grid[i][y][0] == grid[i][x][0]) && (grid[i][y][1] == grid[i][x][1])))) {
                            for (let z in grid[i]) {
                                if ((z != x) && (z != y)) {
                                    rm_pos(grid[i][x][0], Number(z))
                                    rm_pos(grid[i][x][1], Number(z))
                                }
                            }
                        }
                    }
                }
            }
        }
    
    }
    function total(columns) {
        let sum = 0
        for (const x in columns) {
            sum += columns[x].length;
        }
        return sum
    }
    function answer(an_array) {
        const row1 = new Array(5),
            row2 = new Array(5),
            row3 = new Array(5),
            row4 = new Array(5)
        let solution = ""
        for (let i in an_array) {
            if (/[A-E]/.test(i + "")) {
                row1[an_array[i][0]] = i
            }
            else if (/[F-J]/.test(i + "")) {
                row2[an_array[i][0]] = i
            }
            else if (/[K-O]/.test(i + "")) {
                row3[an_array[i][0]] = i
            }
            else if (/[P-T]/.test(i + "")) {
                row4[an_array[i][0]] = i
            }
        }
        solution += row1.join("") + row2.join("") + row3.join("") + row4.join("")
        return solution
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
        alternate(s1)
        alternate(s2)
    }
    function leftOf(s1, s3) {
        let lowest = columns[s1][0]
        let greatest = columns[s3][columns[s3].length - 1]
        let right = columns[s3].filter(x => x > lowest)
        let left = columns[s1].filter(x => x < greatest)
        columns[s3] = right
        columns[s1] = left
        alternate(s1)
        alternate(s3)
    }
    function sameColumn(s1, s3) {
        const intersection = columns[s1].filter(x => columns[s3].includes(x));
        columns[s1] = intersection
        columns[s3] = intersection
        alternate(s1)
        alternate(s3)
    }
    function between(s1, s2, s3) {
        let left_to_right = false
        let right_to_left = false
        let remove = []
        let s1_values = new Set()
        let s3_values = new Set()
        for (let i = 0; i < columns[s2].length; i++) {
            let l_t_r = true
            let r_t_l = true
            const greater = (x) => x > columns[s2][i];
            const lesser = (x) => x < columns[s2][i];
            if (!(columns[s3].some(greater) && columns[s1].some(lesser))) {
                l_t_r = false
            }
            if (!(columns[s1].some(greater) && columns[s3].some(lesser))) {
                r_t_l = false
            }
            if (columns[s3].some(greater) && columns[s1].some(lesser)) {
                left_to_right = true
                for(let item = 0; item < columns[s3].length; item++){
                    if(columns[s3][item] > columns[s2][i]){s3_values.add(columns[s3][item])}
                }
                for(let item = 0; item < columns[s1].length; item++){
                    if(columns[s1][item] < columns[s2][i]){s1_values.add(columns[s1][item])}
                }
            }
            if (columns[s1].some(greater) && columns[s3].some(lesser)) {
                right_to_left = true
                for(let item = 0; item < columns[s3].length; item++){
                    if(columns[s3][item] < columns[s2][i]){s3_values.add(columns[s3][item])}
                }
                for(let item = 0; item < columns[s1].length; item++){
                    if(columns[s1][item] > columns[s2][i]){s1_values.add(columns[s1][item])}
                }
            }
            if ((l_t_r == false) && (r_t_l == false)) {
                remove.push(columns[s2][i])
            }
        }
        columns[s1] = Array.from(s1_values).sort()
        columns[s3] = Array.from(s3_values).sort()
        for (let i = 0; i < remove.length; i++) {
            rm_pos(s2, remove[i])
        }
    
        if ((left_to_right == true) && (right_to_left == false)) {
            columns[s1] = columns[s1].filter(x => x < columns[s2][columns[s2].length - 1])
            columns[s3] = columns[s3].filter(x => x > columns[s2][0])
        }
        else if ((right_to_left == true) && (left_to_right == false)) {
            columns[s1] = columns[s1].filter(x => x > columns[s2][0])
            columns[s3] = columns[s3].filter(x => x < columns[s2][columns[s2].length - 1])
        }
        else if ((left_to_right == false) && (right_to_left == false)) {}
        else if ((left_to_right == true) && (right_to_left == true)) {}
        
        alternate(s1)
        alternate(s2)
        alternate(s3)
    }
    
    
    function clue_reader(clue) {
        let s1 = clue[0]
        let s2 = clue[1]
        let s3 = clue[2]
    
        if ((s2 == "<") && (s1 != s3)) {
            leftOf(s1, s3)
        }
        else if ((s2 == "^") && (rows[s1] != rows[s3])) {
            sameColumn(s1, s3)
        }
        else if ((s1 in columns && s2 in columns && s3 in columns) && ((s1 != s3) && (s2 != s3) && (s2 != s1))) {
            between(s1, s2, s3)
        }
        else if ((s1 === s3) && (s1 != s2)) {
            nextTo(s1, s2)
        }
    }
    function puzzle(clues) {
        for (let i = 0; i < clues.length; i++) {
            clue_reader(clues[i])
            limit()
        }
        //console.log(total(columns))
    }
    
    
    while (total(columns) != 20) {
            puzzle(clues)
            //console.log(columns)
            //console.log(grid)
    }

    return answer(columns)
}

console.log(solve(clues1) == "EDBACGHIJFLMKONSPRTQ")
console.log(solve(clues2) == "CEABDHJIFGOMNLKPSRQT")
console.log(solve(clues3) == "CDBAEIJHGFKNOMLSRTPQ")
console.log(solve(clues4) == "ECDABFHIJGKNMLOPRSQT")
console.log(solve(clues5) == "BDCEAHIGFJMNOLKSQTPR")

