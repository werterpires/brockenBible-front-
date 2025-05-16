import { Routes } from '@angular/router';
import { booksComponent } from './books/books.component';
import { VersesOnVersionsComponent } from './verses-on-versions/verses-on-versions.component';
import { VersionsComponent } from './versions/versions.component';
import { ThemesComponent } from './themes/themes.component';

export const routes: Routes = [
  { path: 'livros', component: booksComponent },
  { path: '', component: booksComponent },
  { path: 'versoes', component: VersionsComponent },
  { path: 'themes', component: ThemesComponent },
];
