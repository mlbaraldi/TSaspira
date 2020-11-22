import Person from "./entities/Person"
import Document from "./entities/Document"
import Book from "./entities/Book"
import Periodical from "./entities/Periodical"
import Gender from "./entities/Gender"

let person1 = new Person("Marcelo", new Date(1989, 1, 16), Gender.male);
let person2 = new Person("Erick", new Date(10, 10, 1980), Gender.male);
let document1 = new Document("Holden Caulfield", "the anti story", person1, new Date(3, 3, 1930));
let book1 = new Book(1312313, 3, 2, "Catcher in the Rye", "Abc", person2, new Date(1,1,1988));
let periodical1 = new Periodical(book1.isbn, book1.volume, 332, book1.title, book1.subtitle, book1.author, new Date(3,3,1980));

console.log(person1);
console.log(person2);
console.log(document1);
console.log(book1);
console.log(periodical1);