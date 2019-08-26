import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStakeholderComponent } from './single-stakeholder.component';

describe('SingleStakeholderComponent', () => {
  let component: SingleStakeholderComponent;
  let fixture: ComponentFixture<SingleStakeholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStakeholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
