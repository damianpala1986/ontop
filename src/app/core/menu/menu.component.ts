import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  
  constructor() { }

  ngOnInit(): void {
  }

}
