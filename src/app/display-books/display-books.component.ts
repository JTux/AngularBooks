import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-display-books',
    templateUrl: './display-books.component.html',
    styleUrls: ['./display-books.component.css']
})

export class DisplayBooksComponent implements OnInit {
    public _book = {};
    ratings = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

    ngOnInit() {
        this._book['rating'] = this.ratings[this._book['rating'] - 1]
    }

    @Input() set book(book: any) {
        this._book = book;
    }

    get book(): any {
        return this._book;
    }
}