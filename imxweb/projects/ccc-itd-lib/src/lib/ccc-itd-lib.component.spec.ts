import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccItdLibComponent } from './ccc-itd-lib.component';

describe('CccItdLibComponent', () => {
  let component: CccItdLibComponent;
  let fixture: ComponentFixture<CccItdLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CccItdLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CccItdLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
