import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadcompleComponent } from './actividadcomple.component';

describe('ActividadcompleComponent', () => {
  let component: ActividadcompleComponent;
  let fixture: ComponentFixture<ActividadcompleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadcompleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadcompleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
