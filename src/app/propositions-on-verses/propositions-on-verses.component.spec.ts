import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsOnVersesComponent } from './propositions-on-verses.component';

describe('PropositionsOnVersesComponent', () => {
  let component: PropositionsOnVersesComponent;
  let fixture: ComponentFixture<PropositionsOnVersesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropositionsOnVersesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropositionsOnVersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
