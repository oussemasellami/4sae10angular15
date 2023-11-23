import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowappartmentComponent } from './showappartment.component';

describe('ShowappartmentComponent', () => {
  let component: ShowappartmentComponent;
  let fixture: ComponentFixture<ShowappartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowappartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowappartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
