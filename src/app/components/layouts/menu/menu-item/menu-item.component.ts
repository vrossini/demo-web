import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input("menuitem") menuitem;
  style;
  styleLink;
  ngOnInit(): void {
    this.style = {
      "background-color": `rgb(155,155,155,${this.menuitem.opacity/10})`,
    };
    this.styleLink = {
      "background-color": `rgb(155,155,155,${this.menuitem.opacity+1/10})`,
    };
  }

}
