import { Component } from '@angular/core';
import { StudentServices } from '../Services/student-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:any[]=[]; // it can store any type of data, but here we are using it to store an array of student objects
  constructor(private studentServices: StudentServices) {}

  //ng onInit(): this is a lifecycle hook in Angular 
// automatically when componet is initialized, 
  ngOnInit() {
    this.students = this.studentServices.getStudents();
    console.log(this.students);
  }
}



