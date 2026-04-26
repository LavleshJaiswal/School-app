import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {

  constructor() { }

  CalculatePercentage(part:number,total: number){
    return total>0?(part/total)*100:0

  }
}
