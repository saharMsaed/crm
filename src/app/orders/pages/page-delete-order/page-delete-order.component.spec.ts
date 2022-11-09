import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteOrderComponent } from './page-delete-order.component';

describe('PageDeleteOrderComponent', () => {
  let component: PageDeleteOrderComponent;
  let fixture: ComponentFixture<PageDeleteOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
