import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Version } from '../verses/types';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import * as utils from './versions.utils';
import * as validators from '../shared/components/custom-input/validators';

import { FormsModule } from '@angular/forms';
import { VersionsService } from './versions.service';
import { Paginator } from '../shared/types';

@Component({
  selector: 'app-versions',
  standalone: true,
  imports: [
    CommonModule,
    CustomFormComponent,
    CustomInputComponent,
    FormsModule,
  ],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.css',
})
export class VersionsComponent {
  versions: Version[] = [];
  createVersionData = { ...utils.createVersionData };
  creating = false;
  validators = validators;
  paginator: Paginator = {
    limit: 100,
    offset: 0,
    orderBy: 'version_name',
    direction: 'asc',
  };

  constructor(private readonly versionsService: VersionsService) {}

  ngOnInit() {
    this.getVersions();
  }

  getVersions() {
    this.versionsService.getVersions(this.paginator).subscribe({
      next: (versions) => {
        this.versions = versions;
      },
      error: (error) => {
        throw error;
      },
    });
  }

  deleteVersion(versionId: number) {}

  createVersion() {
    this.versionsService.createVersion(this.createVersionData).subscribe({
      next: (version) => {
        this.versions.push(version);
        this.creating = false;
        this.createVersionData = { ...utils.createVersionData };
      },
      error: (error) => {
        throw error;
      },
    });
  }

  selectVersion(version: Version) {}
}
