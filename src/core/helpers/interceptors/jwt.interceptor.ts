import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UtilsService } from '../../services/utils.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _utils: UtilsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._utils.GetToken();
    if (token !== null) {
      // add authorization header with jwt token if available
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      map((httpEvent: HttpEvent<any>) => {
        if (httpEvent.type == HttpEventType.Response) {
        }
        return httpEvent;
      })
    );
  }
}
