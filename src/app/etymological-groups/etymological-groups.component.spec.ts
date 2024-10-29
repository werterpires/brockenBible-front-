import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtymologicalGroupsComponent } from './etymological-groups.component';

describe('EtymologicalGroupsComponent', () => {
  let component: EtymologicalGroupsComponent;
  let fixture: ComponentFixture<EtymologicalGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtymologicalGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtymologicalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
