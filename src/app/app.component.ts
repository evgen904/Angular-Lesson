import {Component, OnInit} from '@angular/core';

interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  e: number = Math.E

  str = 'hello world'

  date: Date = new Date()

  float: number = 0.42

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    }
  }

  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'Отличное пиво'},
    {title: 'Text', text: 'Рандомный текст'},
    {title: 'JavaScript', text: 'Язык программирования JavaScript'}
  ]



  ngOnInit(): void {

  }


}
