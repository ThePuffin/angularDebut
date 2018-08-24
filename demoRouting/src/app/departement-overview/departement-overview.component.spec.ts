import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementOverviewComponent } from './departement-overview.component';

describe('DepartementOverviewComponent', () => {
  let component: DepartementOverviewComponent;
  let fixture: ComponentFixture<DepartementOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
