import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDocumentComponent } from './cloud-document.component';

describe('CloudDocumentComponent', () => {
  let component: CloudDocumentComponent;
  let fixture: ComponentFixture<CloudDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudDocumentComponent]
    });
    fixture = TestBed.createComponent(CloudDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
