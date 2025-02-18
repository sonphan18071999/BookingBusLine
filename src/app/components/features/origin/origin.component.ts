import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-origin',
  standalone: true,
  imports: [MatInputModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OriginComponent),
      multi: true,
    }
  ]
})
export class OriginComponent implements ControlValueAccessor {
  @Input()
  public control: AbstractControl | null = null;

  @Input()
  public error: boolean | undefined = undefined;

  @Output() public onChangeOrigin = new EventEmitter<string>();
  public origin: string = '';

  public onChange = (value: string): void => {
    console.log('value change', value)
  };

  public onTouched = (): void => {
  };

  public writeValue(value: string): void {
    console.log('value change', value)
    if (value !== undefined) {
      this.origin = value;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
  }

  public handleOrigin(value: string): void {
    this.control?.setValue(value);
    this.onChange(value)
    this.origin = value;
  }
}
