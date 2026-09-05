import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SAGA_BOOKS } from '../digital-book/books.data';

@Component({
  selector: 'app-audio-book',
  imports: [RouterLink],
  template: `
    <main class="audio-page">
      <section class="audio-hero">
        <div class="audio-hero-grid container">
          <div class="audio-intro">
            <p class="olho">Biblioteca de Sangue Real</p>
            <h1>A saga em <span>áudio</span></h1>
            <p class="prosa">As artes dos audiobooks acompanham os sete volumes da saga. Cada disco guarda a identidade de um capítulo desta história.</p>
          </div>
          <div class="audio-grid" aria-label="Artes dos audiobooks">
          @for (book of books; track book.number) {
            <a class="audio-card" [class.audio-card--featured]="book.number === 'I'" [routerLink]="['/audio-book', book.slug]">
              <div class="audio-art-wrap">
                <img class="audio-art" [src]="'/img/audiobooks/livro-' + book.number.toLowerCase() + '.png'" [alt]="'Arte do audiobook ' + book.title" />
              </div>
              <div class="audio-card-info">
                <p class="audio-label">LIVRO {{ book.number }} — {{ book.title }}</p>
                <p class="audio-meta">{{ book.number === 'I' ? '15 capítulos (00h: 00m: 00s)' : 'Capítulos em preparação' }}</p>
              </div>
            </a>
          }
          </div>
        </div>
      </section>

    </main>
  `,
  styleUrl: './audio-book.css',
})
export class AudioBook {
  protected readonly books = SAGA_BOOKS;
}
