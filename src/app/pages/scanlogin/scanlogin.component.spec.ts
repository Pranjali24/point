import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanloginComponent } from './scanlogin.component';

describe('ScanloginComponent', () => {
  let component: ScanloginComponent;
  let fixture: ComponentFixture<ScanloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
