import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductGroupComponent } from './app-product-group.component';

describe('AppProductGroupComponent', () => {
  let component: AppProductGroupComponent;
  let fixture: ComponentFixture<AppProductGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
