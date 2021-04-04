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

  img = 'https://tuhub.ru/sites/default/files/2018-02/vuejs-logo_0.jpg'

  inputValue = ''

  constructor() {
    setTimeout(() => {
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    }, 5000)
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }


}
