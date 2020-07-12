import { Router } from "@angular/router";
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { FirestoreService } from '../../../shared/services/firestore.service';

@Component({
  selector: 'list-obra',
  templateUrl: './list-obra.component.html',
  styleUrls: ['./list-obra.component.css']
})
export class ListObraComponent implements OnInit {

  searchValue: string = "";
  items: Array<any>;
  name_filtered_items: Array<any>;

  /* ageValue: number = 0; */
  /* age_filtered_items: Array<any>; */

  constructor(
    public authService: AuthService,
    public firestoreService: FirestoreService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.items = [];
    this.name_filtered_items = [];
    this.firestoreService.getObras(JSON.parse(localStorage.getItem('user')).uid)
    .subscribe(result => {
      result.forEach(doc => {
        this.items.push(doc.data());
        // this.name_filtered_items.push(doc.data());
      });
    })
  }

  // openObra(item) {
  //   this.router.navigate(['/home/obra']);
  // }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName() {
    let value = this.searchValue.toLowerCase();
    this.firestoreService.searchObras(value)
    .subscribe(result => {
      this.name_filtered_items = result;
      this.items = result;
      /* this.items = this.combineLists(result, this.age_filtered_items); */
    })
  }

  /* combineLists(a, b){
    let result = [];
    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  } */

  /* rangeChange(event){
    this.firestoreService.searchUsersByAge(event.value)
    .subscribe(result =>{
      this.age_filtered_items = result;
      this.items = this.combineLists(result, this.name_filtered_items);
    })
  } */
}
