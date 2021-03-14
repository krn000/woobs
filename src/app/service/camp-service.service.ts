import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Campaign } from '../campaign';

@Injectable({
  providedIn: 'root'
})
export class CampServiceService {
  private _campaignUrl = "http://localhost:3000"

  constructor( private http: HttpClient) { }

  getCampaign(){
    return this.http.get<any>(this._campaignUrl+'/campaign')
  }
  postCampaign(model:any){
    return this.http.post<any>(this._campaignUrl+'/campaign', model)
  }
  getcamp(id:string, model:any){
    return this.http.get<any>(this._campaignUrl + '/campaign/'+ id , model);
  }

  update(id: string, model:any): Observable<Campaign> {
    return this.http.patch<any>(this._campaignUrl + '/campaign/' + id, JSON.stringify(model))
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: string){
    return this.http.delete<Campaign>(this._campaignUrl + '/campaign/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
