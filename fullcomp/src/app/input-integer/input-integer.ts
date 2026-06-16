import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input() quantity: number = 0;
  @Input() stock: number = 0;

  @Output() quantityChange = new EventEmitter<number>();

  upQuantity() {
    if (this.quantity < this.stock) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}