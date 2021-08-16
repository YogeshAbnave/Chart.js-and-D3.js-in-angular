import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
;
import 'rxjs/add/operator/map'
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // getData(){
  //   let url ="http://localhost:3000/groceries";
  //   return this.http.get(url).map( (res:any) => res)
  // }

  getData(){
    let url ="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=nRf08LK33rL8wvexCp5sg0ilKa53jp1v";
    return this.http.get(url).map( (res:any) => res)

  }
}
//https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=nRf08LK33rL8wvexCp5sg0ilKa53jp1v
// https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=yWRfMimqllvfanpSpoUQGIulPUUEg4GK