import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zippy } from './zippy.component';

describe('ZippyComponent', () => {
  let component: Zippy;
  let fixture: ComponentFixture<Zippy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zippy]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zippy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
