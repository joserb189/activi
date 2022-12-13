import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciascomprobaComponent } from './evidenciascomproba.component';

describe('EvidenciascomprobaComponent', () => {
  let component: EvidenciascomprobaComponent;
  let fixture: ComponentFixture<EvidenciascomprobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciascomprobaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenciascomprobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
