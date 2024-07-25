import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UtilsService } from "../../services/utils.service";
import { isPlatformServer } from "@angular/common";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private _utils: UtilsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (isPlatformServer(this.platformId)) {
      // Côté serveur, lire le cookie de la requête
      const token = req.headers
        .get("Cookie")
        ?.split(";")
        .find((c) => c.trim().startsWith("auth_token="))
        ?.split("=")[1];

      if (token) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
    } else {
      // Côté client, utiliser le service d'authentification
      const token = this._utils.GetToken();
      if (token) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
    }

    return next.handle(req);
  }
}
