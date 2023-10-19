import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisProductoComponent } from './pais-producto.component';

describe('PaisProductoComponent', () => {
  let component: PaisProductoComponent;
  let fixture: ComponentFixture<PaisProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisProductoComponent]
    });
    fixture = TestBed.createComponent(PaisProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
