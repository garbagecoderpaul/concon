import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentariesComponent } from './documentaries.component';

describe('DocumentariesComponent', () => {
  let component: DocumentariesComponent;
  let fixture: ComponentFixture<DocumentariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
