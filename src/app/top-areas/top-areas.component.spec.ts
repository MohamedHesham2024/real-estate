import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAreasComponent } from './top-areas.component';

describe('TopAreasComponent', () => {
  let component: TopAreasComponent;
  let fixture: ComponentFixture<TopAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
