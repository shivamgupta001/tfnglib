import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() {}

  getData(y : any){
  	console.log('service calleds hiiii');
  	console.log(y);
  }
}
