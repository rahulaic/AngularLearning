import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses;

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onChange(course) {
    course.name = 'Updated';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
