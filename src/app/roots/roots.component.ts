import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Root } from './types';
import { RootsOnEtymmologicalGroupsService } from '../roots-on-etymological-groups/roots-on-etymological-groups.service';
import { RootsOnEtymologicalGroupsComponent } from '../roots-on-etymological-groups/roots-on-etymological-groups.component';

@Component({
  selector: 'app-roots',
  standalone: true,
  imports: [CommonModule, RootsOnEtymologicalGroupsComponent],
  templateUrl: './roots.component.html',
  styleUrl: './roots.component.css',
})
export class RootsComponent {
  @Input() root: Root | undefined;

  constructor(
    private readonly rootsOnEtymologicalGroupsService: RootsOnEtymmologicalGroupsService
  ) {}

  getEtymologicalGroups() {
    if (!this.root) return;
    this.rootsOnEtymologicalGroupsService
      .getAllRootOnEtymologicalGroupsByRootId(this.root?.rootId)
      .subscribe({
        next: (rootOnEtymologicalGroups) => {
          if (!this.root) return;
          this.root.rootOnEtymologicalGroups = rootOnEtymologicalGroups;
          console.log('Grupos etimológicos', rootOnEtymologicalGroups);
        },
        error: (error) => {
          throw error;
        },
      });
  }
}
