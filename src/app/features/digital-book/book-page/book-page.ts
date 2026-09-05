import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { findSagaBook, SAGA_BOOKS } from '../books.data';

@Component({
  selector: 'app-book-page',
  imports: [RouterLink],
  templateUrl: './book-page.html',
  styleUrl: './book-page.css',
})
export class BookPage {
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
}
