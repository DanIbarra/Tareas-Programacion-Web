import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadircontactoComponent } from './anadircontacto.component';

describe('AnadircontactoComponent', () => {
  let component: AnadircontactoComponent;
  let fixture: ComponentFixture<AnadircontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadircontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadircontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
