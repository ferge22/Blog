import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [
    new Post(
      1,
      'Mexico Curch',
      'Have you ever been in this mexico curch?',
      'http://www.travel-service.lt/assets/places/mexico-city-14.jpg'
    ),
    new Post(
      2,
      'Surfing',
      'It was an amazing day!',
      'https://upload.wikimedia.org/wikipedia/commons/d/db/Surfing_in_Hawaii.jpg'
    ),
    new Post(
      3,
      'Yummy',
      'I like this pizza',
      'https://www.portalholofote.com/images/noticias/530/232976915.jpg'
    ),
    new Post(
      4,
      'An Amazing View',
      'Look to that picture!',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Wuyi_Mountains_Sea_of_clouds_2.jpg'
    )
  ];

  get allPosts() {
    return [...this.posts];
  }

  getPost(index: number) {
    return {...this.posts[index]};
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postsChanged.next(this.posts.slice());
    console.log(this.allPosts);
  }



}
