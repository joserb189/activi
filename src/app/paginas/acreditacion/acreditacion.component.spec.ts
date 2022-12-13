import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditacionComponent } from './acreditacion.component';

describe('AcreditacionComponent', () => {
  let component: AcreditacionComponent;
  let fixture: ComponentFixture<AcreditacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcreditacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcreditacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
