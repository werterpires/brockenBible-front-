import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { SelectOption } from './types';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  value = '';
  errorMessages: string[] = [];
  onChange = (value: string) => {};
  onTouched = () => {};

  @Input() selectOptions: SelectOption[] = [];
  @Input() label = '';
  @Input() inputType: 'number' | 'text' | 'select' = 'text';
  @Input() size: 'tiny' | 'small' | 'medium' | 'big' | 'huge' = 'medium';
  @Input() placeholder = '';

  @Input() customValidators: ((value: string) => string | null)[] = [];

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

  validate(): void {
    this.errorMessages = [];
    this.customValidators.forEach((validator) => {
      const result = validator(this.value);
      if (result) {
        this.errorMessages.push(result);
      }
    });
  }
}
