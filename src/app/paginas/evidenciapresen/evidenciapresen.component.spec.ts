import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciapresenComponent } from './evidenciapresen.component';

describe('EvidenciapresenComponent', () => {
  let component: EvidenciapresenComponent;
  let fixture: ComponentFixture<EvidenciapresenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciapresenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenciapresenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
