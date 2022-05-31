import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpdateProfileComponent } from './list-update-profile.component';

describe('ListUpdateProfileComponent', () => {
  let component: ListUpdateProfileComponent;
  let fixture: ComponentFixture<ListUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
