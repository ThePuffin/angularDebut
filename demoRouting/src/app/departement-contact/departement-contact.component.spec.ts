import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementContactComponent } from './departement-contact.component';

describe('DepartementContactComponent', () => {
  let component: DepartementContactComponent;
  let fixture: ComponentFixture<DepartementContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
