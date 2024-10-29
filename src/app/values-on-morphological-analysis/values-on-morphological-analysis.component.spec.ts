import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesOnMorphologicalAnalysisComponent } from './values-on-morphological-analysis.component';

describe('ValuesOnMorphologicalAnalysisComponent', () => {
  let component: ValuesOnMorphologicalAnalysisComponent;
  let fixture: ComponentFixture<ValuesOnMorphologicalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesOnMorphologicalAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValuesOnMorphologicalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
