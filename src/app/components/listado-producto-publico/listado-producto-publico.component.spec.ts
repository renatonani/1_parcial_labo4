import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductoPublicoComponent } from './listado-producto-publico.component';

describe('ListadoProductoPublicoComponent', () => {
  let component: ListadoProductoPublicoComponent;
  let fixture: ComponentFixture<ListadoProductoPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoProductoPublicoComponent]
    });
    fixture = TestBed.createComponent(ListadoProductoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
