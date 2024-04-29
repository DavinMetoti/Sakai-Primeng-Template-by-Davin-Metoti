import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit, OnDestroy {

  valCheck: string[] = ['remember'];

  password: string;
  
  config: AppConfig;
  
  subscription: Subscription;

  block8: string = `
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
          <img src="assets/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3">Don't have an account?</span>
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>

      <div>
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <input id="email1" type="text" pInputText class="w-full mb-3">

          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <input id="password1" type="password" pInputText class="w-full mb-3">

          <div class="flex align-items-center justify-content-between mb-6">
              <div class="flex align-items-center">
                  <p-checkbox id="rememberme1" [binary]="true" styleClass="mr-2"></p-checkbox>
                  <label for="rememberme1">Remember me</label>
              </div>
              <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
          </div>

          <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
      </div>
  </div>`;

  constructor(public configService: ConfigService, private router:Router){ }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  _login() {
    this.router.navigate(['/']);
  }
}
