import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifikasi',
  templateUrl: './verifikasi.component.html',
  styleUrl: './verifikasi.component.scss'
})
export class VerifikasiComponent {
  
  value : number
  
  constructor(
    private router: Router
  ) { }

  cancelButton() {
    this.router.navigate(['/']);
  }

}
