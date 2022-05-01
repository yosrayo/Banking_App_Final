import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Action } from '../classes/action';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ActionService {


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private actionUrl = 'http://localhost:8089/ddops/action';
    constructor(private http: HttpClient) { }



    getActionIdUser(id:number){
      return this.http.get(this.actionUrl+'/findRecuPaiement'+id)
    }
   
    create(action: Action): Observable<any> {
      return this.http.post<Action>(this.actionUrl, action, httpOptions).pipe(
        tap((newAction: Action) => console.log(`added user w/ id=${newAction.idAction}`)),
        catchError(this.handleError<Action>('create'))
      );
    }

 
}
