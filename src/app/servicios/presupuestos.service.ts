import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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

  return this.http.post<JSON>(this.presURL, newpres, { headers });
}

  getPresupuestos () {
    return this.http.get<JSON>( this.presURL );
  }

  getPresupuesto ( id$: string )  {
    const url = `${ this.preURL }/${ id$ }.json`; 
    return this.http.get<JSON>( url );
  }

  putPresupuesto( presupuesto: any, id$: string) { 
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    const url = `${ this.preURL }/${ id$ }.json`; 
    return this.http.put<JSON>( url, newpre, {headers});
    }

    delPresupuesto ( id$: string ) {
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.delete<JSON>( url );
    }


}
