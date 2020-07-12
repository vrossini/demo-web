import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';
import { AuthService } from '../../../shared/services/auth.service';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService,
    public menuService: MenuService,
  ) { }

  menuList: any[] = [];
  menuLoaded: Boolean;
  menu: MenuItem[];
  changeMenu: boolean;
  
  ngOnInit(): void {
    this.menuService.changeMenu.subscribe(res => {
      this.changeMenu = res;
      this.menuList = [];
      if (this.changeMenu) {
        this.menu = [
          {
            id: "1",
            text: "Nova obra",
            link: "/home/new-obra",
            icon: "fas fa-plus",
          },
          {
            id: "2",
            text: "Minhas obras",
            link: "/home/list-obra",
            icon: "fas fa-list",
          },
          {
            id: "3",
            text: "Sair",
            link: "",
            icon: "fas fa-sign-out-alt",
          },
        ];
      } else {
        this.menu = [
          {
            id: "4",
            text: "Trocar de obra",
            link: "",
            icon: "fas fa-exchange-alt",
          },
        ];
      }
      this.renderMenu(this.menu);
    });
  }

  renderMenu(menu: MenuItem[]) {
    while (menu.length > 0) {
      menu.forEach((menuItem) => {
        const index: number = menu.indexOf(menuItem);
        if (index !== -1) {
          menu.splice(index, 1);
        }
        this.menuList.push(menuItem);
      });
    }
    this.menuList.sort((a, b) => a.id.localeCompare(b.id));
    this.menuLoaded = true;
  }

  actions(i) {
    if (i.text == "Sair") {
      this.authService.SignOut();
    } else if (i.text == "Trocar de obra") {
      this.router.navigate(['/home/list-obra']);
      this.menuService.changeValue(true);
    }
  }
}
