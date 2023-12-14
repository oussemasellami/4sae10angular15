import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../models/appartement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  apartmentUrl ='http://localhost:3000/appartement'
  constructor(private http:HttpClient) { }

  getSommeValueOf(list:any[], critiria:string, value:any){
let n=0
for(let i in list){
  if(list[i][critiria]==value){
    n++
  }
}
return n
  }

  getappartment():Observable<Appartement[]>{
    return this.http.get<Appartement[]>(this.apartmentUrl)
  }
}
