export class Book {
constructor(title, author, description, pages, currentPage, read = false){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
   }

readBook = (page) =>{
    if(page < 1 || page > this.pages){
        return 0;        
    }else if (page >= 1 && page < this.pages) {
        this.currentPage = page;        
        return 1;
    } else if (page === this.pages) {
        this.currentPage = page;
        this.read = true;        
        return 1;
    }
 };
}

let firstBook = new Book('Les vestiges du jour','Kazuo Ishiguro','Roman', 288, 5, false);
let secondBook = new Book('La légion des damnés','Sven Hassel','Poche', 250, 15, false);
let thirdBook = new Book('Vivez','Stéphane Hessel','Super', 45, 25, false);


export const books = [firstBook, secondBook, thirdBook];
/*CONSIGNES:
  •	mettez à jour la page actuelle avec une page valable qui est inférieure au nombre total de pages
  •	mettez à jour la page actuelle avec exactement le nombre de pages total du livre 
    (le livre devrait disparaître du carousel et apparaître dans la liste "Lus")
    Quand vous aurez accompli ces tâches, votre navigateur devrait afficher une alerte qui contient un mot. 
 */