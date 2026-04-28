# Angular Basics Simple Guide

## 1) What is Angular?
Angular is a frontend framework made by Google.
It helps us build web applications using:
- Components
- TypeScript
- HTML templates
- CSS styles

In simple words:
- HTML = structure
- CSS = design
- TypeScript = logic
- Angular = connects everything in an organized way

---

## 2) What is in an Angular Project?
Your project has one main folder:
- Project1

Inside this folder, Angular keeps config files and source code.

---

## 3) Important Top-Level Files (Project1)

### angular.json
- Main Angular project configuration.
- Controls build settings, assets, styles, and scripts.

### package.json
- Lists project dependencies (Angular packages and others).
- Has scripts like start, build, test.

### tsconfig.json
- TypeScript compiler settings for the whole project.

### tsconfig.app.json
- TypeScript settings for the app code.

### tsconfig.spec.json
- TypeScript settings for test files.

### README.md
- Project notes and setup instructions.

---

## 4) Source Code Folder
All main app code is inside:
- src

### src/index.html
- The main HTML page loaded in browser.
- Angular app gets injected here.

### src/main.ts
- Entry point of Angular app.
- Starts (bootstraps) the app.

### src/styles.css
- Global CSS styles for the full app.

### src/app folder
This is where app-level files are.

---

## 5) App Folder Files (Very Important)

### app.ts
- Root component logic (TypeScript).
- Contains class, variables, and methods.

### app.html
- Root component template (HTML view).
- What user sees on screen.

### app.css
- Root component styles.
- CSS only for this component (mostly local scope).

### app.config.ts
- App-level configuration.
- Used in newer standalone Angular setup.

### app.routes.ts
- Routing configuration.
- Defines which component opens for which URL path.

### app.spec.ts
- Unit test file for app component.

---

## 6) What is a Component?
A component is the basic building block in Angular.

A component usually has:
- TypeScript file for logic
- HTML file for UI
- CSS file for style

Example idea:
- Header component
- Login component
- Product list component

You combine many components to build a full app.

---

## 7) Very Basic Example

Suppose we want to show a message.

TypeScript (logic):
~~~ts
export class App {
  title = 'My First Angular App';
}
~~~

HTML (view):
~~~html
<h1>{{ title }}</h1>
<p>Welcome to Angular!</p>
~~~

How it works:
- title is a variable in TypeScript.
- {{ title }} prints that value in HTML.

---

## 8) Angular Data Binding (Simple)

### Interpolation
Show value from TypeScript in HTML.
~~~html
<p>{{ username }}</p>
~~~

### Property Binding
Set HTML property from TypeScript value.
~~~html
<img [src]="imageUrl" />
~~~

### Event Binding
Run function when user clicks.
~~~html
<button (click)="sayHello()">Click</button>
~~~

### Two-way Binding
Read and update value both sides.
~~~html
<input [(ngModel)]="name" />
~~~

---

## 9) Routing in Simple Words
Routing means page navigation without full page reload.

Example in app.routes.ts:
~~~ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
~~~

- / opens HomeComponent
- /about opens AboutComponent

---

## 10) Common Angular Commands
Run inside Project1 folder:

~~~bash
npm install
ng serve
~~~

- npm install: installs dependencies
- ng serve: runs app in development mode

Usually app opens at:
- http://localhost:4200

---

## 11) Quick Summary
- Angular app is made of components.
- Each component has logic + HTML + CSS.
- src is the main source folder.
- app folder has root component files and routing/config files.
- main.ts starts the app.
- angular.json and package.json are important setup files.

This is enough to start learning Angular comfortably.
