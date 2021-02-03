import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpIssuesComponent } from './ngp-issues.component';

describe('NgpIssuesComponent', () => {
  let component: NgpIssuesComponent;
  let fixture: ComponentFixture<NgpIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgpIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgpIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
