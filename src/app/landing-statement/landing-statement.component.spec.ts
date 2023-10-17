import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStatementComponent } from './landing-statement.component';

describe('LandingStatementComponent', () => {
  let component: LandingStatementComponent;
  let fixture: ComponentFixture<LandingStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
