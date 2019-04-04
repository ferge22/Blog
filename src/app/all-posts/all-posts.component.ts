import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  loadedPosts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
  this.loadedPosts = this.postService.allPosts;
  console.log(this.loadedPosts);
  }

}
