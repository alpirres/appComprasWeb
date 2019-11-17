import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProveedoresService {
  presURL = 'https://appcompras-4fca2.firebaseio.com/proveedores.json';
  preURL = 'https://appcompras-4fca2.firebaseio.com/proveedores';

  constructor(private http: HttpClient) { }

  postProveedor(proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<JSON>(this.presURL, newpres, { headers });
  }

  getProveedores() {
    return this.http.get<JSON>(this.presURL);
  }

  getProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get<JSON>(url);
  }

  putProveedor(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put<JSON>(url, newpre, { headers });
  }

  delProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete<JSON>(url);
  }

}

