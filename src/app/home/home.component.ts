import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ApiHelperService } from '../services/api-helper.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private httpData : ApiHelperService){}


  ngOnInit(){
    this.httpData.passData().subscribe((res: any) => {
      console.log(res.data)
      this.studentsArray = res.data
    })
  }


  studentsArray : any = []

 firstName = ''
 age = ''
 grade = ''
 subjects = ''
 street = ''
 city = ''
 zip = ''
 check : boolean = false
 index? : number

//  studentsArray : any = [
//   {
//     id: 1,
//     email: 'george.bluth@reqres.in',
//     first_name: 'George',
//     last_name: 'Bluth',
//     avatar: 'https://reqres.in/img/faces/1-image.jpg'
//   },
//   {
//     id: 2,
//     email: 'janet.weaver@reqres.in',
//     first_name: 'Janet',
//     last_name: 'Weaver',
//     avatar: 'https://reqres.in/img/faces/2-image.jpg'
//   },
//   {
//     id: 3,
//     email: 'emma.wong@reqres.in',
//     first_name: 'Emma',
//     last_name: 'Wong',
//     avatar: 'https://reqres.in/img/faces/3-image.jpg'
//   },
//   {
//     id: 4,
//     email: 'eve.holt@reqres.in',
//     first_name: 'Eve',
//     last_name: 'Holt',
//     avatar: 'https://reqres.in/img/faces/4-image.jpg'
//   },
//   {
//     id: 5,
//     email: 'charles.morris@reqres.in',
//     first_name: 'Charles',
//     last_name: 'Morris',
//     avatar: 'https://reqres.in/img/faces/5-image.jpg'
//   },
//   {
//     id: 6,
//     email: 'tracey.ramos@reqres.in',
//     first_name: 'Tracey',
//     last_name: 'Ramos',
//     avatar: 'https://reqres.in/img/faces/6-image.jpg'
//   }
// ];


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
  console.log(this.studentsArray[index])
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
