import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootsOnEtymologicalGroupsComponent } from './roots-on-etymological-groups.component';

describe('RootsOnEtymologicalGroupsComponent', () => {
  let component: RootsOnEtymologicalGroupsComponent;
  let fixture: ComponentFixture<RootsOnEtymologicalGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootsOnEtymologicalGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootsOnEtymologicalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
