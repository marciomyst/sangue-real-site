import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SAGA_BOOKS } from './books.data';

@Component({
  selector: 'app-digital-book',
  imports: [RouterLink],
  templateUrl: './digital-book.html',
  styleUrl: './digital-book.css',
})
export class DigitalBook {
  protected readonly books = SAGA_BOOKS;
}
