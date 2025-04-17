import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 link = 'https://www.ers.ga.gov/sites/main/files/main-images/camera_lense_0.jpeg'
 name = 'name'
 surname = 'surname'

 hide(){
  this.showLists = !this.showLists
 }

 showLists = false

 array : string [] = ['aa','bb','cc','dd','ee']
 arrayy = ['aa','bb']
}
