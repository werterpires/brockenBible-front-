import { Component, Input, Version } from '@angular/core';
import { VerseOnVersion } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verses-on-versions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verses-on-versions.component.html',
  styleUrl: './verses-on-versions.component.css',
})
export class VersesOnVersionsComponent {
  @Input() versesOnVersions: VerseOnVersion[] = [];
}
