import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Первый блок', text: 'Описание блока', id: 1},
    {title: 'Второй блок блок', text: 'Описание для второго блока', id: 2}
  ]

  updatePost(post: Post) {
    this.posts.unshift(post)
  }
}
