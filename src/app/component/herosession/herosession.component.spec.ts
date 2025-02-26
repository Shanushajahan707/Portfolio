import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosessionComponent } from './herosession.component';

describe('HerosessionComponent', () => {
  let component: HerosessionComponent;
  let fixture: ComponentFixture<HerosessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerosessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
