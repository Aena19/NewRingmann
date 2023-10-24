import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangeFilterComponent } from './flange-filter.component';

describe('FlangeFilterComponent', () => {
  let component: FlangeFilterComponent;
  let fixture: ComponentFixture<FlangeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlangeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
