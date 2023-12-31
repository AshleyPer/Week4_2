import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonItems:any = {};

  setItem(key:any, item:any){
    this.jsonItems[key] = item;
  }

  getItem(key:any){
    return this.jsonItems[key];
  }
}
