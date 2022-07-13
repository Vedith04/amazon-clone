import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageSlidesComponent } from './background-image-slides.component';

describe('BackgroundImageSlidesComponent', () => {
  let component: BackgroundImageSlidesComponent;
  let fixture: ComponentFixture<BackgroundImageSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundImageSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundImageSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
