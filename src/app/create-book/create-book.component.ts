import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  useBtn = false;
  createBook: FormGroup;
  books = [];

  genres = [
    'Biography', 'Childrens', 'Classic Literature', 'Comics/Graphic Novels', 'Cookbook', 'Crime/Detective', 'Drama', 'Essay', 'Fable', 'Fairy Tale', 'Fan Fiction', 'Fantasy', 'Folklore', 'Historical Fiction', 'History', 'Horror', 'Humor', 'Journal', 'Lab Report', 'Legend', 'Magical Realism', 'Memoir', 'Meta Fiction', 'Mystery', 'Mythology', 'Mythopeia', 'Narrative NonFiction/Personal Narrative', 'Owner\'s Manual', 'Realistic Fiction', 'Reference Book', 'Religion/Spiritual', 'Science Fiction', 'Self Help', 'Short Story', 'Speech', 'Suspence/Thriller', 'Swashbuckler', 'Tall Tale', 'Textbook', 'Western', 'Young Adult'
  ];

  ratings = [
    { value: 1, view: '⭐'},
    { value: 2, view: '⭐⭐'},
    { value: 3, view: '⭐⭐⭐'},
    { value: 4, view: '⭐⭐⭐⭐'},
    { value: 5, view: '⭐⭐⭐⭐⭐'}
  ];

  constructor(private fb: FormBuilder, private dbService: DatabaseService) {
    setTimeout(() => {
      this.useBtn = true;
    }, 3000);
  }

  ngOnInit() {
    this.createBook = this.fb.group({
      nameOfBook: new FormControl(),
      author: new FormControl(),
      genre: new FormControl(),
      pubYear: new FormControl(),
      rating: new FormControl(),
    })

    this.findBooks();
  }

  onCreateBook(): void {
    this.books.unshift(this.createBook.value)
    this.dbService.makeBook(this.books[0]).subscribe(Book => this.books[0] = Book);
  }

  findBooks(): void {
    this.dbService.getBooks().subscribe(Books => {
      this.books = Books;
      this.books.reverse();
    })
  }
}
