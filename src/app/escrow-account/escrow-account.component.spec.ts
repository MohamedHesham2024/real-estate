import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscrowAccountComponent } from './escrow-account.component';

describe('EscrowAccountComponent', () => {
  let component: EscrowAccountComponent;
  let fixture: ComponentFixture<EscrowAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscrowAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscrowAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
