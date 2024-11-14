import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../../structures/modal/modal.component';

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
}
