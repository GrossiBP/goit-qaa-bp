const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"]

console.log(fruits)

const numbers = [1, 424, 5, 2, 5424, 536, 77, 88, 2, 3, 5, 2, 6, 7, 80, 8, 6, 54, 3]

console.log('tylko liczby >5: ')
numbers.forEach(number => {
    if(number > 5) {
        console.log(number)
    }
})