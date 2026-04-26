import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldashboardAppComponent } from './schooldashboard-app.component';

describe('SchooldashboardAppComponent', () => {
  let component: SchooldashboardAppComponent;
  let fixture: ComponentFixture<SchooldashboardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchooldashboardAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchooldashboardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
