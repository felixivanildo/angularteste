import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-generic-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers:[{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef( ()=> GenericInputComponent), multi: true}],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.css'
})
export class GenericInputComponent implements ControlValueAccessor{
  @Input() type: InputTypes = "text";  
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(obj: any): void {
      this.value = this.value
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
      
  }
}
