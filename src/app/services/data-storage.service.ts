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
    this.http.get('https://blog-mediapark.firebaseio.com/posts.json')
      .subscribe(
        (response: Post[]) => {
          console.log(response);
          this.postService.setPosts(response);
        }
      );
  }



}
