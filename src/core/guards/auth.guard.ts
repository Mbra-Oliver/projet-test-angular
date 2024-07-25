import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtilsServiceService } from '../services/utils.service';
import { appRoutes } from '../helpers/routes';

export const authGuard: CanActivateFn = (route, state) => {
  const utilsService: UtilsServiceService = inject(UtilsServiceService);
  const router: Router = inject(Router);
  if (utilsService.hasToken()) {
    return true;
  }
  router.navigate([appRoutes.login]);
  return false;
};
