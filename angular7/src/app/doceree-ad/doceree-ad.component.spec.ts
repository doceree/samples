import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocereeAdComponent } from './doceree-ad.component';

describe('DocereeAdComponent', () => {
  let component: DocereeAdComponent;
  let fixture: ComponentFixture<DocereeAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocereeAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocereeAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
