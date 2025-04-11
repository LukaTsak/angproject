import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 link = 'https://www.ers.ga.gov/sites/main/files/main-images/camera_lense_0.jpeg'
 name = 'name'
 surname = 'surname'
}
