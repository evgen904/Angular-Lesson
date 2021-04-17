import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: 'Первый блок', text: 'Описание блока', id: 1},
    {title: 'Второй блок блок', text: 'Описание для второго блока', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {
        title: '123',
        text: '123 12313',
        id: 123
      }
    }, 5000)
  }

  updatePost(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(item => item.id !== id)
  }

}
