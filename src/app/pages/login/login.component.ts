import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericInputComponent } from '../../components/generic-input/generic-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent, ReactiveFormsModule, GenericInputComponent],
  providers: [LoginService, ToastrService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor( private router: Router, private loginService: LoginService, private toastService: ToastrService){
    this.loginForm = new FormGroup({
        email:  new FormControl('', [Validators.required]),
        password:  new FormControl('', [Validators.required])
    })
  }


  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: ()=>{this.toastService.success("Logged")},
      error: ()=>{this.toastService.error("Error, try again")}
    })
  }

  

  navigate(){
    this.router.navigate(['signup'])
  }
}
