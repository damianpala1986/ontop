import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorSearchComponent } from './contractor-search.component';

describe('ContractorSearchComponent', () => {
  let component: ContractorSearchComponent;
  let fixture: ComponentFixture<ContractorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
