import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BultoComponent } from './bulto.component';

describe('BultoComponent', () => {
  let component: BultoComponent;
  let fixture: ComponentFixture<BultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BultoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
