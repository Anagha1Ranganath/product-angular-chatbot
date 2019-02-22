import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcompComponent } from './registrationcomp.component';

describe('RegistrationcompComponent', () => {
  let component: RegistrationcompComponent;
  let fixture: ComponentFixture<RegistrationcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
