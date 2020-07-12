import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
  selector: 'obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {
  id: string;

  constructor(
    public route: ActivatedRoute,
    public menuService: MenuService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.menuService.changeValue(false);
  }
}
