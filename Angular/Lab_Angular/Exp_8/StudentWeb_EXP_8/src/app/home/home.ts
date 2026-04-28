import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    fname="Aarth";
    RollNo=123;
    course="Angular";
    
    tempname="";
    tempRollNo=0;
    tempCourse="";


    showbutton(){
     this.fname=this.tempname;
     this.RollNo=this.tempRollNo;
     this.course=this.tempCourse;
}
}


