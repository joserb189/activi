import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoactiComponent } from './tipoacti.component';

describe('TipoactiComponent', () => {
  let component: TipoactiComponent;
  let fixture: ComponentFixture<TipoactiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoactiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoactiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
