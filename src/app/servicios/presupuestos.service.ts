import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://appcompras-4fca2.firebaseio.com/presupuestos.json'; 
  preURL = 'https://appcompras-4fca2.firebaseio.com/presupuestos';
constructor(private http: HttpClient) {}


postPresupuesto(presupuesto: any) {
  const newpres = JSON.stringify(presupuesto);
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<JSON>(this.presURL, newpres, { headers }).pipe(
    map(res => {
      console.log(res);
      return res;
    }))
}

getPresupuestos () {
  return this.http.get<JSON>( this.presURL ).pipe(
  map( res => res));
  }

  getPresupuesto ( id$: string )  {
    const url = `${ this.preURL }/${ id$ }.json`; 
    return this.http.get<JSON>( url ).pipe(
    map( res => res));
  }

  putPresupuesto( presupuesto: any, id$: string) { 
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    const url = `${ this.preURL }/${ id$ }.json`; 
    return this.http.put<JSON>( url, newpre, {headers}).pipe(
    map( res => {
    console.log(res);
    return res;
    }))
    }

    delPresupuesto ( id$: string ) {
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.delete<JSON>( url ).pipe(
      map( res => res));
    }


}
