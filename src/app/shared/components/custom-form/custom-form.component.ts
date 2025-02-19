import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ModalComponent } from '../../structures/modal/modal.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css',
})
export class CustomFormComponent {
  @Output() saveEmmitter = new EventEmitter();
  @Output() cancelEmmitter = new EventEmitter();
  @Input() title = 'Criação';

  @ContentChildren(CustomInputComponent, { descendants: true })
  inputs!: QueryList<CustomInputComponent>;

  validateForm(): boolean {
    let isValid = true;
    this.inputs.forEach((input) => {
      input.validate();
      if (input.errorMessages.length > 0) {
        isValid = false;
      }
    });
    return isValid;
  }

  onSave(): void {
    if (this.validateForm()) {
      this.saveEmmitter.emit();
    }
  }
}
