import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceVillaComponent } from './create-service-villa.component';

describe('CreateServiceVillaComponent', () => {
  let component: CreateServiceVillaComponent;
  let fixture: ComponentFixture<CreateServiceVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
