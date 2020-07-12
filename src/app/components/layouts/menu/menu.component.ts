import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input("menu") menu:MenuItem[];

  ngOnInit(): void {
    console.log(this.menu);
  }

}
