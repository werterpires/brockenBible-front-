import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossiblePropertiesValuesComponent } from './possible-properties-values.component';

describe('PossiblePropertiesValuesComponent', () => {
  let component: PossiblePropertiesValuesComponent;
  let fixture: ComponentFixture<PossiblePropertiesValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PossiblePropertiesValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PossiblePropertiesValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
