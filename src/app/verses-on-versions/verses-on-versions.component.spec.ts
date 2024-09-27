import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesOnVersionsComponent } from './verses-on-versions.component';

describe('VersesOnVersionsComponent', () => {
  let component: VersesOnVersionsComponent;
  let fixture: ComponentFixture<VersesOnVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersesOnVersionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersesOnVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
