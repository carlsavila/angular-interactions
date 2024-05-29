import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenCardComponent } from './kitten-card.component';

describe('KittenCardComponent', () => {
  let component: KittenCardComponent;
  let fixture: ComponentFixture<KittenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KittenCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KittenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
