import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHolderComponent } from './main-holder.component';

describe('MainHolderComponent', () => {
  let component: MainHolderComponent;
  let fixture: ComponentFixture<MainHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
