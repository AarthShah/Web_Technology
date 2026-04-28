import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServices {
  students = [
    { name: 'Aarth', age: 21, city: 'Chennai' },
    { name: 'Rohan', age: 22, city: 'Bangalore' },
    { name: 'Priya', age: 20, city: 'Hyderabad' },
    { name: 'Anita', age: 23, city: 'Mumbai' },
  ];

  getStudents() {
    return this.students;
  }
}
