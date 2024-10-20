import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalsOnVersesComponent } from './originals-on-verses.component';

describe('OriginalsOnVersesComponent', () => {
  let component: OriginalsOnVersesComponent;
  let fixture: ComponentFixture<OriginalsOnVersesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalsOnVersesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OriginalsOnVersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
