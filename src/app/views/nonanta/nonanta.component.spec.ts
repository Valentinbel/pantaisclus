import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonantaComponent } from './nonanta.component';

describe('NonantaComponent', () => {
  let component: NonantaComponent;
  let fixture: ComponentFixture<NonantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
