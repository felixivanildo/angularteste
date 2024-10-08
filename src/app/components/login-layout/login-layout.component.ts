import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Output("submit")  onSubmit = new EventEmitter();
  @Input() disabledPrimaryButton: boolean = true;
  @Output("navigate")  onNavigate = new EventEmitter();


  submit(){
    this.onSubmit.emit();
  }

  
  navigate(){
    this.onNavigate.emit();
  }
  
  
}
