import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable()

export class PostsService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [
    new Post(
      'Mexico Curch',
      'Have you ever been in this mexico curch?',
      'http://www.travel-service.lt/assets/places/mexico-city-14.jpg'
    ),
    new Post(
      'Surfing',
      'It was an amazing day!',
      'https://upload.wikimedia.org/wikipedia/commons/d/db/Surfing_in_Hawaii.jpg'
    ),
    new Post(
      'Yummy',
      'I like this pizza',
      'https://www.portalholofote.com/images/noticias/530/232976915.jpg'
    ),
    new Post(
      'An Amazing View',
      'Look to that picture!',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Wuyi_Mountains_Sea_of_clouds_2.jpg'
    )
  ];

  constructor() {}

  get allPosts() {
    return [...this.posts];
  }

  getPost(index: number) {
    return this.posts[index];
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsChanged.next(this.posts.slice());
  }

}
