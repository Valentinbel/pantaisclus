import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantaistvComponent } from './pantaistv.component';

describe('PantaistvComponent', () => {
  let component: PantaistvComponent;
  let fixture: ComponentFixture<PantaistvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantaistvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantaistvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
