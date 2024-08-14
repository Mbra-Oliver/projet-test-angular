import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { config } from "./app/app.config.server";
import { renderApplication } from "@angular/platform-server";

export default function bootstrap() {
  return bootstrapApplication(AppComponent, config);
}

export { renderApplication };
