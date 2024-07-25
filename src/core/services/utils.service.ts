import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TOKEN_IDENTIFIER } from "../helpers/constantes";
import { appRoutes } from "../helpers/routes";
import { Decrypt, Encrypt } from "../helpers/encode";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  private _token: string | null = null;

  constructor(private router: Router) {
    // Initialize token from localStorage if available
    this._token = this.GetToken();
  }

  get token(): string | null {
    return this._token;
  }

  set token(value: string | null) {
    this._token = value;
  }

  /**
   * Get Token from localStorage
   * Returns decrypted token if exists, otherwise null
   */
  public GetToken(): string | null {
    const encryptedToken = localStorage.getItem(TOKEN_IDENTIFIER);
    return encryptedToken ? Decrypt(encryptedToken) : null;
  }

  /**
   * Set Token in localStorage
   * @param token The token to encrypt and store
   */
  public SetToken(token: string): void {
    const encryptedToken = Encrypt(token);
    localStorage.setItem(TOKEN_IDENTIFIER, encryptedToken);
    this.token = token; // Update local _token as well
  }

  /**
   * Remove token from localStorage
   */
  public RemoveToken(): void {
    localStorage.removeItem(TOKEN_IDENTIFIER);
    this.token = null; // Update local _token as well
  }

  /**
   * Disconnect user by removing token and navigating to login page
   */
  public Disconnect(): void {
    this.RemoveToken();
    this.router.navigate([appRoutes.login]);
  }
  public hasToken() {
    return this.GetToken() !== null;
  }
}
