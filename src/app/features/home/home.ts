import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookCover } from '../../shared/components/book-cover/book-cover';

@Component({
  selector: 'app-home',
  imports: [RouterLink, BookCover],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
