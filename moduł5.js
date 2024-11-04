
// 1.
const numbers = [2, 4, 5]
function double(num){
    if(Array.isArray(num)){
        let num_twice = num.map(n => {
            return n * 2
        })

        return num_twice
    }
}
console.log(`Original ${numbers} and doubled ${double(numbers)}`)

// 4.
students = [
    { name: 'Janek', zdolny: true},
    { name: 'Jurek', zdolny: true},
    { name: 'Jolo', zdolny: false}
]

function show_names(studs){
    return studs.map(s => s.name)
}

console.log("Original db: " + JSON.stringify(students))
console.log(`And their names only ${show_names(students)}`)