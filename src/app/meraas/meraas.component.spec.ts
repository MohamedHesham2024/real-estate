import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeraasComponent } from './meraas.component';

describe('MeraasComponent', () => {
  let component: MeraasComponent;
  let fixture: ComponentFixture<MeraasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeraasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeraasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
