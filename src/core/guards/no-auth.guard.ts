import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { appRoutes } from '../helpers/routes';
import { UtilsServiceService } from '../services/utils.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const utilsService: UtilsServiceService = inject(UtilsServiceService);
  const router: Router = inject(Router);
  if (!utilsService.hasToken()) {
    return true;
  }
  router.navigate([appRoutes.dashboard.panel]);
  return false;
};
