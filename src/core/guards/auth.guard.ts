import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { appRoutes } from '../helpers/routes';
import { UtilsService } from '../services/utils.service';

export const authGuard: CanActivateFn = (route, state) => {
  const utilsService: UtilsService = inject(UtilsService);
  const router: Router = inject(Router);
  if (utilsService.hasToken()) {
    return true;
  }
  router.navigate([appRoutes.login]);
  return false;
};
