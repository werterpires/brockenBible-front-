import { Routes } from '@angular/router';
import { booksComponent } from './books/books.component';

export const routes: Routes = [
  { path: 'livros', component: booksComponent },
  { path: '', component: booksComponent },
];
