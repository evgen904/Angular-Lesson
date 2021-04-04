import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';

  titleDynamic = 'titleDynamic';
  numberText = 42;
  arr = [1, 2 , 3 , 4, 5];

  obj = {
    a: 2,
    b: {
      c: 3
    }
  };



}
