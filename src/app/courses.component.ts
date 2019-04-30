import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <h2 [innerHTML] = 'title'></h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button (click) = 'toggleFlag()'>Adding click count</button>
        <h2>count: {{toggle}}</h2>
        <input [(ngModel)]="filter" (keyup.enter)="onKeyUp()"/> <p>{{input2}}</p>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    toggle: number = 0;
    filter;
    input2 = 'blank';
    getTitle() {
        return this.title;
    }

    toggleFlag() {
        return this.toggle++;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.filter = 'Alma';
    }

    onKeyUp() {
        this.input2 = this.filter;
        console.log(this.filter);
    }
    // Logic for calling an HTTP service
    // Only presentation logic

}