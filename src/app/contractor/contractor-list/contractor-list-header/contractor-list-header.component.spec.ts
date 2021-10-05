import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorListHeaderComponent } from './contractor-list-header.component';

describe('ContractorListHeaderComponent', () => {
  let component: ContractorListHeaderComponent;
  let fixture: ComponentFixture<ContractorListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
