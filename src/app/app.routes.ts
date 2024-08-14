import { Routes } from "@angular/router";
import { authGuard } from "../core/guards/auth.guard";
import { noAuthGuard } from "../core/guards/no-auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },

  {
    path: "dashboard",
    loadComponent: () =>
      import("./pages/pages/dashboard/dashboard.component").then(
        (module) => module.DashboardComponent
      ),
  },

  { path: "**", redirectTo: "" },
];
