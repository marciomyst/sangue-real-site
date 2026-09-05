import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Sangue Real',
    loadComponent: () => import('./features/home/home').then(({ Home }) => Home),
  },
  {
    path: 'digital-book/:bookId',
    title: 'Volume | Sangue Real',
    loadComponent: () => import('./features/digital-book/book-page/book-page').then(({ BookPage }) => BookPage),
  },
  {
    path: 'digital-book',
    title: 'Livro digital | Sangue Real',
    loadComponent: () => import('./features/digital-book/digital-book').then(({ DigitalBook }) => DigitalBook),
  },
  {
    path: 'audio-book/:bookId',
    title: 'Audiobook | Sangue Real',
    loadComponent: () => import('./features/audio-book/audio-book-page/audio-book-page').then(({ AudioBookPage }) => AudioBookPage),
  },
  {
    path: 'audio-book',
    title: 'Audiolivro | Sangue Real',
    loadComponent: () => import('./features/audio-book/audio-book').then(({ AudioBook }) => AudioBook),
  },
  {
    path: 'universo/:itemId',
    title: 'Universo | Sangue Real',
    loadComponent: () => import('./features/universo/universo-item-page/universo-item-page').then(({ UniversoItemPage }) => UniversoItemPage),
  },
  {
    path: 'universo',
    title: 'Universo | Sangue Real',
    loadComponent: () => import('./features/universo/universo').then(({ Universo }) => Universo),
  },
  { path: 'extras', redirectTo: 'universo', pathMatch: 'full' },
  { path: 'saga', redirectTo: 'universo', pathMatch: 'full' },
  {
    path: 'events',
    title: 'Eventos | Sangue Real',
    loadComponent: () => import('./features/events/events').then(({ Events }) => Events),
  },
  {
    path: 'autor',
    title: 'Autor | Sangue Real',
    loadComponent: () => import('./features/autor/autor').then(({ Autor }) => Autor),
  },
  { path: '**', redirectTo: '' },
];
