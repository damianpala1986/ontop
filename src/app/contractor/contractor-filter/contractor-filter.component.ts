import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-filter',
  templateUrl: './contractor-filter.component.html',
  styleUrls: ['./contractor-filter.component.scss'],
})
export class ContractorFilterComponent implements OnInit {
  placeholder = 'Contractor Name';
  constructor() {}

  ngOnInit(): void {}
}
