import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderViewComponent } from './stakeholder-view.component';

describe('StakeholderViewComponent', () => {
  let component: StakeholderViewComponent;
  let fixture: ComponentFixture<StakeholderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeholderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
