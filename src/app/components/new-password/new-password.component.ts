import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {


  constructor(
    private router: Router
  ) { }

  cancelButton() {
    this.router.navigate(['/']);
  }

}
