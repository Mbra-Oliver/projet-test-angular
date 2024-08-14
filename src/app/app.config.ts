import { ApplicationConfig, LOCALE_ID } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
  withFetch,
} from "@angular/common/http";
import {
  BrowserAnimationsModule,
  provideAnimations,
} from "@angular/platform-browser/animations";
import { ErrorInterceptor } from "../core/helpers/interceptors/error.interceptor";
import { JwtInterceptor } from "../core/helpers/interceptors/jwt.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    {
      provide: LOCALE_ID,
      useValue: "fr-FR",
    },
    BrowserAnimationsModule,
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: "fr" },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes),
  ],
};
