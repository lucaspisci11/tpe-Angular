import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input() quantity: number = 0;
  @Input() max: number = 0;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}