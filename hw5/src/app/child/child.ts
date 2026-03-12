import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../interfaces/item.interface';
@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() cardData?: Item;

  @Output() titleChangeEvent = new EventEmitter<void>();

  onSaveClick() {
    console.log(this.cardData);
    this.titleChangeEvent.emit();
  }
}
