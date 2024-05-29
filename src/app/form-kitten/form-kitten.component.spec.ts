import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKittenComponent } from './form-kitten.component';

describe('FormKittenComponent', () => {
  let component: FormKittenComponent;
  let fixture: ComponentFixture<FormKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormKittenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
