import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit, OnDestroy {
  loadedPosts: Post[];
  subscription: Subscription;
  p = 1;
  itemsPerPagePipe = 4;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  this.subscription = this.postService.postsChanged
    .subscribe(
      (recipes => {
        this.loadedPosts = recipes;
      })
    );
  this.loadedPosts = this.postService.allPosts;
  console.log(this.loadedPosts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
