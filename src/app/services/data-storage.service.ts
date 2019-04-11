import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './posts.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {

  constructor(private http: HttpClient, private postService: PostsService) {

  }

  storePosts() {
    return this.http.put('https://blog-mediapark.firebaseio.com/posts.json', this.postService.allPosts);
  }

  getPosts() {
    this.http.get<Post[]>('https://blog-mediapark.firebaseio.com/posts.json')
      .subscribe(
        (posts: Post[]) => {
          console.log(posts);
          this.postService.setPosts(posts);
        }
      );
  }



}
