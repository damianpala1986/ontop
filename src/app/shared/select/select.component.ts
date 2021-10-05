import { Component, OnInit } from '@angular/core';

interface CodeDescription {
  code: string;
  description: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  itemSelected=undefined;
  listSelect: CodeDescription[] = [
    {code: 'COD1', description: 'Codigo 1'},
    {code: 'COD2', description: 'Codigo 2'},    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
