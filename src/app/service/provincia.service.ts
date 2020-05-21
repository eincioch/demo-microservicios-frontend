import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Provincia } from '../model/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = "http://localhost:8080";
  private urlEndPoint: string = `${this.url}/provincias`;


  constructor(private http: HttpClient) { }



  getProvincias(){
    return this.http.get(this.urlEndPoint);
  }


  delete(id: number): Observable<Provincia> {
    return this.http.delete<Provincia>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }


}
