import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProductDescComponent } from './landing-product-desc.component';

describe('LandingProductDescComponent', () => {
  let component: LandingProductDescComponent;
  let fixture: ComponentFixture<LandingProductDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingProductDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingProductDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
