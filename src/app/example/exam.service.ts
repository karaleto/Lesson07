//import { Injectable } from '@angular/core';

//@Injectable({

  //providedIn: 'root'
//})
//export class ExamService {

  //constructor() { }
//}

import { Injectable } from '@angular/core';

@Injectable(){
  export class falsService {
    constructor() {
      console.log("Ok, now this has been injected!");
    }
    falsPoster(qty) {
      console.log(qty, "Alright, all done!");
    }
  }