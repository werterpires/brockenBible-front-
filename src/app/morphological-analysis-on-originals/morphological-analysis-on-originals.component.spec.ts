import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphologicalAnalysisOnOriginalsComponent } from './morphological-analysis-on-originals.component';

describe('MorphologicalAnalysisOnOriginalsComponent', () => {
  let component: MorphologicalAnalysisOnOriginalsComponent;
  let fixture: ComponentFixture<MorphologicalAnalysisOnOriginalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorphologicalAnalysisOnOriginalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorphologicalAnalysisOnOriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
