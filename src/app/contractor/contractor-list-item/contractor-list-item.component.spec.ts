import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorListItemComponent } from './contractor-list-item.component';

describe('ContractorListItemComponent', () => {
  let component: ContractorListItemComponent;
  let fixture: ComponentFixture<ContractorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
