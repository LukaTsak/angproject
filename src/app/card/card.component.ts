import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() el: any;
  @Input() index?: number;

  @Output() delete = new EventEmitter<number>();
  @Output() editt = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }

  onEdit() {
    this.editt.emit(this.index);
  }
}
