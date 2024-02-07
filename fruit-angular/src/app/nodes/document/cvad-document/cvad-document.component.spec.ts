import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvadDocumentComponent } from './cvad-document.component';

describe('CvadDocumentComponent', () => {
  let component: CvadDocumentComponent;
  let fixture: ComponentFixture<CvadDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvadDocumentComponent]
    });
    fixture = TestBed.createComponent(CvadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
