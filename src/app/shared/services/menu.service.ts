import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  changeMenu = new BehaviorSubject<boolean>(true);

  constructor() { }

  changeValue(val: boolean){
    this.changeMenu.next(val);
  }
}
