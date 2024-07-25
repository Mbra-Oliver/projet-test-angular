import { Routes } from "@angular/router";
import { authGuard } from "../core/guards/auth.guard";
import { noAuthGuard } from "../core/guards/no-auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import("./../pages/auth/login/login.component").then(
        (module) => module.LoginComponent
      ),
  },

  {
    path: "dashboard",
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./../pages/admin/panel/panel.component").then(
            (module) => module.PanelComponent
          ),
      },
    ],
  },

  { path: "**", redirectTo: "" },
];
