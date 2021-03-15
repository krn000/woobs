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
    return this.http.put<any>(this._campaignUrl + '/campaign/' + id, model)
  }

  delete(id: string){
    return this.http.delete<string>(this._campaignUrl + '/campaign/' + id)
  }
  
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
