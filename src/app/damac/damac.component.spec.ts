import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamacComponent } from './damac.component';

describe('DamacComponent', () => {
  let component: DamacComponent;
  let fixture: ComponentFixture<DamacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DamacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
