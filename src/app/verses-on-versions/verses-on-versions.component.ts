import { Component, Input } from '@angular/core';
import { VerseOnVersion } from './types';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { VersionsService } from '../versions/versions.service';
import { Version } from '../verses/types';
import { Paginator } from '../shared/types';
import * as validators from '../shared/components/custom-input/validators';
import * as utils from './verses-on-versions.utils';
import { SelectOption } from '../shared/components/custom-input/types';
import { FormsModule } from '@angular/forms';
import { versesOnVersionsService } from './verses-on-versions.service';

@Component({
  selector: 'app-verses-on-versions',
  standalone: true,
  imports: [
    CommonModule,
    CustomFormComponent,
    CustomInputComponent,
    FormsModule,
  ],
  templateUrl: './verses-on-versions.component.html',
  styleUrl: './verses-on-versions.component.css',
  providers: [VersionsService],
})
export class VersesOnVersionsComponent {
  @Input() versesOnVersions: VerseOnVersion[] = [];
  @Input() verseId!: number;
  createVerseOnVersionData = { ...utils.createVerseOnVersionData };

  creating: boolean = false;
  versionsPaginator: Paginator = {
    limit: 100,
    offset: 0,
    orderBy: 'version_name',
    direction: 'asc',
  };
  validators = validators;

  versions: Version[] = [];
  selectOption: SelectOption[] = [];

  constructor(
    private readonly versionsService: VersionsService,
    private readonly versesOnVersionsService: versesOnVersionsService
  ) {}

  ngOnInit() {
    this.getAllVersions();

    this.getMinAndmax(this.versesOnVersions);
    //sort por textNumber em ordem crescente
    this.versesOnVersions.sort(
      (a, b) => (a.textNumber || 0) - (b.textNumber || 0)
    );
  }

  createVerseOnVersion() {
    this.createVerseOnVersionData.verseId = this.verseId;
    this.createVerseOnVersionData.versionId = Number(
      this.createVerseOnVersionData.versionId
    );
    this.versesOnVersionsService
      .createVerseOnVersion(this.createVerseOnVersionData)
      .subscribe({
        next: (verseOnVersion) => {
          verseOnVersion.version = this.versions.find(
            (version) =>
              version.versionId === this.createVerseOnVersionData.versionId
          );
          this.versesOnVersions.push(verseOnVersion);
          this.createVerseOnVersionData = { ...utils.createVerseOnVersionData };
          this.creating = false;
        },
        error: (error) => {
          throw error;
        },
      });
  }

  getAllVersions() {
    this.versionsService.getVersions(this.versionsPaginator).subscribe({
      next: (versions) => {
        this.versions = versions;
        this.selectOption = this.versions.map((version) => {
          return {
            value: version.versionId.toString(),
            label: version.versionName,
          };
        });
      },
      error: (error) => {
        throw error;
      },
    });
  }

  textToValue(text: VerseOnVersion): number {
    const valor = text.verseText
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    text.textNumber = valor;
    return valor;
  }

  mapValueToHue(value: number, min: number, max: number): number {
    return 20 + ((value - min) / (max - min)) * (340 - 20);
  }

  hslToRgb(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const [r, g, b] = [f(0), f(8), f(4)];
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
      b * 255
    )})`;
  }

  min = 0;
  max = 0;
  getMinAndmax(phrases: VerseOnVersion[]): void {
    const values = phrases.map(this.textToValue);
    this.min = Math.min(...values);
    this.max = Math.max(...values);
  }

  assignColorsToPhrases(phrase: VerseOnVersion): string {
    const value = this.textToValue(phrase);
    const saturation = 100,
      lightness = 50;

    const hue = this.mapValueToHue(value, this.min, this.max);
    const color = this.hslToRgb(hue, saturation, lightness);
    return color;
  }
}
