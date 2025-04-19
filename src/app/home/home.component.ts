import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 firstName = ''
 age = ''
 grade = ''
 subjects = ''
 street = ''
 city = ''
 zip = ''
 check : boolean = false
index? : number

 studentsArray : any = []

 studObj = {}

 create(){
  const studObj = {
    index: this.index,
    firstname : this.firstName,
    Agee : this.age,
    gradee : this.grade,
    subj : this.subjects,
    streett : this.street,
    cityy : this.city,
    zipp : this.zip,
    checkk : this.check,
   }

  this.studentsArray.push (studObj)
  console.log(this.studentsArray)
  

  this.firstName = ''
  this.age = ''
  this.grade = ''
  this.subjects = ''
  this.street = ''
  this.city = ''
  this.zip = ''
  this.check = false
 }

 delete(index : number){
  this.studentsArray.splice(index,1)
 }

 editt(index : number){
  this.firstName = this.studentsArray[index].firstname
  this.age = this.studentsArray[index].agee
  this.grade = this.studentsArray[index].gradee
  this.subjects = this.studentsArray[index].subj
  this.street = this.studentsArray[index].streett
  this.city = this.studentsArray[index].cityy
  this.zip = this.studentsArray[index].zipp

  this.delete(index)
 }

 checkDel(){
  console.log(this.studentsArray)
  for(let el of this.studentsArray){
    if(el.checkk == true){
      this.studentsArray.splice(el.indexx,1)
    }
  }
 }

}
