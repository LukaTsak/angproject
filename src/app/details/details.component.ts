import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiHelperService } from '../services/api-helper.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  imports: [CardComponent, CommonModule, FormsModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  constructor(private route: ActivatedRoute, private httpData : ApiService) { 
    this.route.params.subscribe(params => {
      this.cardId = params['id'];
      console.log(this.cardId);
      // this.firstName = this.studentsArray[this.index].first_name;
      // this.age = this.studentsArray[this.index].last_name;
      // this.grade = this.studentsArray[this.index].email;
      // this.subjects = this.studentsArray[this.index].avatar;
    });
  }

  ngOnInit(){
    this.httpData.getData(`https://reqres.in/api/users/${this.cardId}`).subscribe((res: any) => {
      console.log(res.data)
      this.studentsArray.push(res.data)
    })
}

studentsArray: any = []
cardId?: any;


}


