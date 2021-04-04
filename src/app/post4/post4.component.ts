import {Component} from '@angular/core'

@Component({
  selector: 'app-post4',
  template: `
    <div class="post-4">
      <h2>Post 4</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit!</p>
    </div>
  `,
  styles:[`
    .post-4 {
      border: 1px solid #ccc;
      padding: 2rem;
    }
    h2 {
      font-size: 22px;
    }
  `]
})

export class Post4Component{}
