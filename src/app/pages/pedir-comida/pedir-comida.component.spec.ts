import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirComidaComponent } from './pedir-comida.component';

describe('PedirComidaComponent', () => {
  let component: PedirComidaComponent;
  let fixture: ComponentFixture<PedirComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedirComidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedirComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
