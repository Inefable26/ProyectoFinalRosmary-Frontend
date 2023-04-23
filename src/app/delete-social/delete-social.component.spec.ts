import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSocialComponent } from './delete-social.component';

describe('DeleteSocialComponent', () => {
  let component: DeleteSocialComponent;
  let fixture: ComponentFixture<DeleteSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
