import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicIssueComponent } from './comic-issue.component';

describe('ComicIssueComponent', () => {
  let component: ComicIssueComponent;
  let fixture: ComponentFixture<ComicIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
