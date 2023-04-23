import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFooterComponent } from './delete-footer.component';

describe('DeleteFooterComponent', () => {
  let component: DeleteFooterComponent;
  let fixture: ComponentFixture<DeleteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
