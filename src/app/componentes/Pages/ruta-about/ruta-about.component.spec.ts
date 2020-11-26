import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAboutComponent } from './ruta-about.component';

describe('RutaAboutComponent', () => {
  let component: RutaAboutComponent;
  let fixture: ComponentFixture<RutaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
