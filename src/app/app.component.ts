import { Component } from '@angular/core';
import { listService } from './list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [listService]
})
export class AppComponent {
  title = 'to-do-list-Angular';
  items;
  newItem = "";
  searchText = "";


  constructor(private _listService : listService){}

  ngOnInit():void{
    if(this.searchText == ""){
    this.items = this._listService.getAllItem();
    }
    else{
      this.items = this._listService.getFound();
    }
  }
  getItems(){
    if(this.searchText == ""){
    return this.items = this._listService.getAllItem();
    }
    else{
    this.searchItem();
    return this.items = this._listService.getFound();
    }
  }

  addItem(){
    this._listService.addItem(this.newItem);
    this.newItem = "";
    this.searchText = "";
    this.ngOnInit();
    //console.log("add");
  }
  removeItem(i){
    this._listService.removeItem(i);
  }
  searchItem(){
    this.searchText = this.searchText.toLowerCase();
    this._listService.findItem(this.searchText);
    this.ngOnInit();
  }
  removeAll(){
    this.items = this._listService.removeAllItems();
  }
}
