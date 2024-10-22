import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsPropertiesComponent } from './words-properties.component';

describe('WordsPropertiesComponent', () => {
  let component: WordsPropertiesComponent;
  let fixture: ComponentFixture<WordsPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsPropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordsPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
