import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { TOKEN_IDENTIFIER } from "../helpers/constantes";
import { appRoutes } from "../helpers/routes";
import { Decrypt, Encrypt } from "../helpers/encode";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  private _token: string | null = null;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialize token from cookie if available
    this._token = this.GetToken();
  }

  get token(): string | null {
    return this._token;
  }

  set token(value: string | null) {
    this._token = value;
  }

  /**
   * Get Token from cookie
   * Returns decrypted token if exists, otherwise null
   */
  public GetToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const cookies = document.cookie.split(";");
      const tokenCookie = cookies.find((c) =>
        c.trim().startsWith(`${TOKEN_IDENTIFIER}=`)
      );
      if (tokenCookie) {
        const encryptedToken = tokenCookie.split("=")[1];
        return Decrypt(encryptedToken);
      }
    }
    return null;
  }

  /**
   * Set Token in cookie
   * @param token The token to encrypt and store
   */
  public SetToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const encryptedToken = Encrypt(token);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration to 7 days from now
      document.cookie = `${TOKEN_IDENTIFIER}=${encryptedToken}; expires=${expirationDate.toUTCString()}; path=/; Secure; SameSite=Strict`;
      this.token = token; // Update local _token as well
    }
  }

  /**
   * Remove token from cookie
   */
  public RemoveToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.cookie = `${TOKEN_IDENTIFIER}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      this.token = null; // Update local _token as well
    }
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
