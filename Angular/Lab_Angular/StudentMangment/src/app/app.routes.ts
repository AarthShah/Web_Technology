import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { AddStudent } from '../add-student/add-student';
import { List } from '../list/list';

export const routes: Routes = [
  {path:'Home',component:Home},
  {path:'List',component:List},
  {path:'AddStudent',component:AddStudent}
];
