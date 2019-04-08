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
    ),
    new Post(
      'Stop Global Warming!',
      'Global warming is a long-term rise in the average temperature of the Earth climate system.',
      'https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/clis11_cmw42d_2400.jpg?itok=pSF4SU7h'
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

  // used in data storage service
  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

}
