import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../models/appartement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  apartmentUrl ='http://localhost:3000/appartement'
  apartmentUrls='/api/appartement'
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
  addappartment(appartment:Appartement):Observable<Appartement[]>{
    return this.http.post<Appartement[]>(this.apartmentUrls,appartment)
  }
  deleteappartment(id : number):Observable<Appartement[]>{
    return this.http.delete<Appartement[]>(this.apartmentUrls+'/'+id)
  }

  upadateappartment(id:number,appartement:Appartement):Observable<Appartement[]>
{
  return this.http.put<Appartement[]>(this.apartmentUrls+'/'+id,appartement)
}}
