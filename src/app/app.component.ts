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


  inputText = 'inputText'
  inputText2 = 'inputText2'

  backgroundColor = false

  toggle: any = false

  arr2 = [1,1,2,3,5,8,13]

  objs = [
    {post: 'Post 1', author: 'Evgeniy', comment: [
        {name: 'Max 1', text: 'Lorem 1'},
        {name: 'Max 2', text: 'Lorem 2'},
        {name: 'Max 3', text: 'Lorem 3'}
      ]},
    {post: 'Post 2', author: 'Ksusha', comment: [
        {name: 'Max 11', text: 'Lorem 11'},
        {name: 'Max 22', text: 'Lorem 22'},
        {name: 'Max 33', text: 'Lorem 33'}
      ]}
  ]




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

  onInputText(event: any) {
    this.inputText = event.target.value
  }



}
