import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceRoomComponent } from './create-service-room.component';

describe('CreateServiceRoomComponent', () => {
  let component: CreateServiceRoomComponent;
  let fixture: ComponentFixture<CreateServiceRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
