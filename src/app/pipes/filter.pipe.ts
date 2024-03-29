import { Pipe, PipeTransform } from '@angular/core';
interface Post {
  title: string
  text: string
}

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts
    }

    return posts.filter(post => {
      // @ts-ignore
      return post[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
