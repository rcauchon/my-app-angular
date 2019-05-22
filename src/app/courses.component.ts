import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>

        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button class="btn btn-success" (click) = 'toggleFlag()'>Adding click count</button>
        <h2>count: {{toggle}}</h2>
        <div class="form-group">
        <input class="form-control" [(ngModel)]="filter" (keyup.enter)="onKeyUp()"/>
        </div>
        <p>{{input2}}</p>
    `
})

export class CoursesComponent {
    title = 'List of courses';
    courses;
    toggle = 0;
    filter;
    input2 = 'blank';

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.filter = 'Alma';
    }

    getTitle() {
        return this.title;
    }

    toggleFlag() {
        return this.toggle++;
    }

    onKeyUp() {
        this.input2 = this.filter;
        console.log(this.filter);
    }
}