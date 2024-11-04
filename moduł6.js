/*
    "this" praktycznie odnosi się do aktualnie wykorzystywanego obiektu, tzn. że mając obiekt z właściwościami, 
    this będzie wskazywać na wybraną właściwość w tej konkretnej instancji obiektu. Funkcje strzałkowe nie posiadają
    swojego this i co znajduje się pod 'this' jest zdeterminowane przez funkcję nadrzędną. 

*/

const osoba = {
    username: "Maciej",
    showName() {
        console.log(this.username)
    },
}

/*
Tutaj nie jestem pewien, co konkretnie powinienem zrobić, bo nazwa funkcji jest taka sama, ale mam pokazać caly obiekt
Zaimplementuj metodę showName() używając słowa kluczowego this, aby odnosić się do samego obiektu.
*/
// function showName() {
//     console.log(this)
// }

console.log(osoba.showName())

const bookShelf = {
    authors: [],
    getAuthors(){
        console.log(this.authors)
    },
    addAuthor(authorName){
        this.authors.push(authorName)
    }
}

bookShelf.addAuthor("Kazimierz")
bookShelf.addAuthor("Adam")
bookShelf.addAuthor("Bogumił")
bookShelf.getAuthors()

