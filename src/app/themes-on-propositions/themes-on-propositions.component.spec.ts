import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesOnPropositionsComponent } from './themes-on-propositions.component';

describe('ThemesOnPropositionsComponent', () => {
  let component: ThemesOnPropositionsComponent;
  let fixture: ComponentFixture<ThemesOnPropositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesOnPropositionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemesOnPropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
