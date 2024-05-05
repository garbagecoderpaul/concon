import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftdetailComponent } from './nftdetail.component';

describe('NftdetailComponent', () => {
  let component: NftdetailComponent;
  let fixture: ComponentFixture<NftdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
