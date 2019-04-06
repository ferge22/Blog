import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './posts.service';

@Injectable()

export class DataStorageService {

  constructor(private http: HttpClient, private postService: PostsService) {

  }

  storePosts() {
    return this.http.put('https://blog-mediapark.firebaseio.com/posts.json', this.postService.allPosts);
  }



}
