import { Component } from "@angular/core";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  sidebarVisible: boolean = true;
}
