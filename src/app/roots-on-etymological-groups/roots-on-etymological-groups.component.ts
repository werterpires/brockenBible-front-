import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { RootOnEtymologicalGroup } from './types';

@Component({
  selector: 'app-roots-on-etymological-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roots-on-etymological-groups.component.html',
  styleUrl: './roots-on-etymological-groups.component.css',
})
export class RootsOnEtymologicalGroupsComponent {
  @Input() rootOnEtymologicalGroups: RootOnEtymologicalGroup[] = [];
}
