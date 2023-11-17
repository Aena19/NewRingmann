import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProductsDropdownComponent } from './sort-products-dropdown.component';

describe('SortProductsDropdownComponent', () => {
  let component: SortProductsDropdownComponent;
  let fixture: ComponentFixture<SortProductsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortProductsDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortProductsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
