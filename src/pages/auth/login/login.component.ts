import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../../core/services/auth.service';
import { TOKEN_IDENTIFIER } from '../../../core/helpers/constantes';
import { Router } from '@angular/router';
import { appRoutes } from '../../../core/helpers/routes';
import { ILoginResponse } from '../../../core/interfaces/ILoginResponse';
import { UtilsServiceService } from '../../../core/services/utils.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzMessageModule,
    HttpClientModule,
    NzButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private msgService: NzMessageService,
    private router: Router,
    private utils: UtilsServiceService
  ) {
    this.form = this.fb.group({
      username: new FormControl('melanicet', [Validators.required]),
      password: new FormControl('azerty', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.isLoading = true;

      this.service.login(username, password).subscribe(
        (response: ILoginResponse) => {
          this.isLoading = false;
          if (response && response.access_token) {
            this.utils.SetToken(response.access_token);

            this.router.navigate([appRoutes.dashboard.panel]).then(() => {
              this.msgService.success('Vous êtes connecté');
            });
          } else {
            this.msgService.error("Réponse invalide de l'API");
          }
        },
        (error: any) => {
          this.isLoading = false;
          console.error('Login error', error);
          this.msgService.error('Erreur lors de la connexion');
        }
      );
    }
  }
}
