import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
        {{ text | summary:10}}
    `
})

export class CoursesComponent {

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
  'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


}



