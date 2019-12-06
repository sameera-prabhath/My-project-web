import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsListComponent } from './editors-list.component';

describe('EditorsListComponent', () => {
  let component: EditorsListComponent;
  let fixture: ComponentFixture<EditorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
