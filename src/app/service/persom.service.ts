import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersomService {
   persom ={ 
  username :String, 
  firstname:String,
  lastname:String,
  email:String,
  psw:String
  }
  Listpersom : [{}];
  

  constructor() {
   
   }

add(persom : {any}){
this.Listpersom.includes(persom);
}

get(){
  return this.Listpersom;
}



}
