import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowinventoryComponent } from './lowinventory.component';

describe('LowinventoryComponent', () => {
  let component: LowinventoryComponent;
  let fixture: ComponentFixture<LowinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowinventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
