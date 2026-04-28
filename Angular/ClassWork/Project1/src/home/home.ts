import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fname="Aarth";
  cities=["Chennai","Bangalore","Hyderabad","Mumbai"];
}
