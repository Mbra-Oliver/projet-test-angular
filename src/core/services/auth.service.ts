// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TOKEN_IDENTIFIER } from '../helpers/constantes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl =
    'https://auth.mind2codes.com/auth/realms/defis-devs/protocol/openid-connect/token';
  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    this.isLoadingSubject.next(true);

    const body = new HttpParams()
      .set('client_id', 'frontend')
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http.post(this.authUrl, body.toString(), { headers }).pipe(
      tap(() => {
        this.isLoadingSubject.next(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_IDENTIFIER);
    // this.router.navigate([appRoutes.login]).then(() => {
    //   this.msgService.info('Vous êtes déconnecté');
    // });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_IDENTIFIER);
  }
}
