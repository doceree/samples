import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaltrialsComponent } from './clinicaltrials.component';

describe('ClinicaltrialsComponent', () => {
  let component: ClinicaltrialsComponent;
  let fixture: ComponentFixture<ClinicaltrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicaltrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicaltrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
