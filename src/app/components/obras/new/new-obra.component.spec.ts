import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObraComponent } from './new-obra.component';

describe('NewObraComponent', () => {
  let component: NewObraComponent;
  let fixture: ComponentFixture<NewObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
