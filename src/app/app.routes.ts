import { Routes } from '@angular/router';
import { LivrosComponent } from './books/books.component';

export const routes: Routes = [
  { path: 'livros', component: LivrosComponent },
  { path: '', component: LivrosComponent },
];
