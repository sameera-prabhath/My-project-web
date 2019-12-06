import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnimComponent } from './home-anim.component';

describe('HomeAnimComponent', () => {
  let component: HomeAnimComponent;
  let fixture: ComponentFixture<HomeAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
