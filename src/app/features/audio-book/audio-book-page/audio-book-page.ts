import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { findSagaBook, SAGA_BOOKS } from '../../digital-book/books.data';

const LIVRO_I_CAPITULOS = [
  'A Noite da Neve Negra',
  'O Menino do Nexus',
  'A Presença Antiga',
  'A Biblioteca Infinita',
  'O Diário do Esquecido',
  'O Azul dos Segredos',
  'O Dourado dos Sonhos',
  'O Vermelho do Preço',
  'O Conselho Partido',
  'A Voz nas Sombras',
  'O Menino Contido',
  'O Arquivo Proibido',
  'O Traidor Aparente',
  'A Fissura Aberta',
  'O Nome Perdido',
] as const;

@Component({
  selector: 'app-audio-book-page',
  imports: [RouterLink],
  templateUrl: './audio-book-page.html',
  styleUrl: './audio-book-page.css',
})
export class AudioBookPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly book = toSignal(
    this.route.paramMap.pipe(map((params) => findSagaBook(params.get('bookId')) ?? SAGA_BOOKS[0])),
    { initialValue: SAGA_BOOKS[0] },
  );

  protected readonly previousBook = computed(() => {
    const index = SAGA_BOOKS.findIndex((item) => item.slug === this.book().slug);
    return index > 0 ? SAGA_BOOKS[index - 1] : undefined;
  });

  protected readonly nextBook = computed(() => {
    const index = SAGA_BOOKS.findIndex((item) => item.slug === this.book().slug);
    return index < SAGA_BOOKS.length - 1 ? SAGA_BOOKS[index + 1] : undefined;
  });

  protected readonly hasAudio = computed(() => this.book().number === 'I');
  protected readonly chapters = LIVRO_I_CAPITULOS.map((title, index) => ({
    number: String(index + 1).padStart(2, '0'),
    title,
  }));
}
