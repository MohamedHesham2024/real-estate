import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OqoodSystemComponent } from './oqood-system.component';

describe('OqoodSystemComponent', () => {
  let component: OqoodSystemComponent;
  let fixture: ComponentFixture<OqoodSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OqoodSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OqoodSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
