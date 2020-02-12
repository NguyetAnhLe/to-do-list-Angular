import {Injectable} from '@angular/core';

@Injectable()
export class listService{
  constructor(){}
  items  = ['Do homework','Watch anime' ,'Sleep till night'];
  found=[];

  getAllItem(){
    return this.items;
  }

  getFound(){
    return this.found;
    console.log(this.found);
  }

  addItem(name){
    if(name!="")
    this.items.push(name);
  }

  removeItem(i){
    //console.log(i);
    this.items.splice(i,1);
  }

  removeAllItems(){
    this.items = [];
  }


// can use array filter, but too late, im already hardcode this :<
  findItem(text){
    this.found = [];
    let lengthInput = text.length;
    //console.log(text);
    for(var i = 0; i < this.items.length; i++){
      let temp = this.items[i];
      let subString = "";
      if(temp.length > lengthInput) {
        let j = 0;
        while(j < lengthInput){
          subString +=temp.charAt(j);
          j++;
        }
        //console.log(subString);
        subString = subString.toLowerCase();
        if(subString === text){
          this.found.push(temp);
          console.log(temp);
        }
        subString = "";
      }
    }
  }
}
