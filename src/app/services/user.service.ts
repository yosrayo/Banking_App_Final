import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  private UsersUrl = 'http://localhost:8089/ddops/user/';
  private url = 'http://localhost:8089/ddops/user/addUser';
  constructor(private http: HttpClient) { }


  getUser (email:String, mdp:String): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl+'authentify/'+email+'/'+mdp).pipe(
      tap(_ => console.log('fetched Users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  passwordForgettin(username: String , new_password : string): Observable<any> {
    return this.http.post(this.UsersUrl+'passwordForgettin/'+username+'/'+new_password ,httpOptions).pipe(
      tap((newUser: User) => console.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('create'))
    );
  }
  
  create(user: User): Observable<any> {
    return this.http.post<User>('http://localhost:8089/ddops/user/addUser', user, httpOptions).pipe(
      tap((newUser: User) => console.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('create'))
    );
  }

  updateUser(user: User ): Observable<User> {
    return this.http.put<User>(this.UsersUrl +'updateProfile/', user, httpOptions).pipe(
      tap((newUser: User) => console.log(`updeted user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('create'))
    );
  }

   
  updateUserX(id : number , emp : User) {
    return this.http.put(this.UsersUrl + 'updateUser/' + id, emp);
  }
}
