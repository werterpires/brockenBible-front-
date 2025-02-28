import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {}
