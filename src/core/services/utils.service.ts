import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN_IDENTIFIER } from '../helpers/constantes';
import { appRoutes } from '../helpers/routes';
import { Decrypt, Encrypt } from '../helpers/encode';

@Injectable({
  providedIn: 'root',
})
export class UtilsServiceService {
  private _token: string | null = null;
  constructor(private router: Router) {}

  get token(): string | null {
    return this._token;
  }

  set token(value: string | null) {
    this._token = value;
  }

  /**
   * Get Token
   * @constructor
   */
  public GetToken(): string | null {
    return Decrypt(localStorage.getItem(TOKEN_IDENTIFIER));
  }

  /**
   * Set Token
   * @param token
   * @constructor
   */
  public SetToken(token: string): void {
    localStorage.setItem(TOKEN_IDENTIFIER, Encrypt(token));
  }

  /**
   * Remove token
   * @constructor
   */
  public RemoveToken(): void {
    localStorage.removeItem(TOKEN_IDENTIFIER);
  }

  /**************
   * PAGE TITLE *
   **************/

  /**
   * Disconnect an user
   * @constructor
   */
  public Disconnect(): void {
    this.RemoveToken();
    this.token = null;
    this.router.navigate([appRoutes.login]);
  }

  /**
   * Disconnect a user with confirmation
   * @constructor
   */
  public LogOut(): void {}

  public hasToken() {
    return this.GetToken() !== null;
  }
}
