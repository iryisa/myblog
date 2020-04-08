import { Post } from './models/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrayPosts: Post[];

  constructor() {
    if (localStorage.getPost('posts')) {
      const arrayay = JSON.parse(localStorage.getPost('posts'));
      this.arrayPosts = arrayay;
    } else {
      this.arrayPosts = [];
    }
  }

  agregarPost(pPost) {
    this.arrayPosts.push(pPost);
    const arrayPostsJON = JSON.stringify(this.arrayPosts);
    localStorage.setPost('posts', arrayPostsJON);
  }

  getAllPosts(): Promise<Post[]> {
    return Promise.resolve(this.arrayPosts);
  }
}
