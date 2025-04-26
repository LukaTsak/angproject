import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardId ?: number;

  constructor(private routee: ActivatedRoute) { 
    this.routee.params.subscribe(paramss => {
      this.cardId = paramss['id'];
      // this.firstName = this.studentsArray[this.index].first_name;
      // this.age = this.studentsArray[this.index].last_name;
      // this.grade = this.studentsArray[this.index].email;
      // this.subjects = this.studentsArray[this.index].avatar;
    });
  }





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
