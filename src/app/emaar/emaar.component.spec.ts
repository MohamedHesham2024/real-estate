import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaarComponent } from './emaar.component';

describe('EmaarComponent', () => {
  let component: EmaarComponent;
  let fixture: ComponentFixture<EmaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmaarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
