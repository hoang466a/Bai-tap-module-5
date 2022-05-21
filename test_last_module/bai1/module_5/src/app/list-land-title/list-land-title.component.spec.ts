import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLandTitleComponent } from './list-land-title.component';

describe('ListLandTitleComponent', () => {
  let component: ListLandTitleComponent;
  let fixture: ComponentFixture<ListLandTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLandTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLandTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
