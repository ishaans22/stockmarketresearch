import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerloginComponentComponent } from './customerlogin-component.component';

describe('CustomerloginComponentComponent', () => {
  let component: CustomerloginComponentComponent;
  let fixture: ComponentFixture<CustomerloginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerloginComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerloginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
