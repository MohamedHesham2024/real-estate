import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobhaComponent } from './sobha.component';

describe('SobhaComponent', () => {
  let component: SobhaComponent;
  let fixture: ComponentFixture<SobhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
