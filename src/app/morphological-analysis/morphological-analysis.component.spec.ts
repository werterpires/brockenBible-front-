import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphologicalAnalysisComponent } from './morphological-analysis.component';

describe('MorphologicalAnalysisComponent', () => {
  let component: MorphologicalAnalysisComponent;
  let fixture: ComponentFixture<MorphologicalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorphologicalAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorphologicalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
