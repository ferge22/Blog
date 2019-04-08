import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id: number;
  singleLoadedPost: Post;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
      }
    );
    this.singleLoadedPost = this.postsService.getPost(this.id);
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  onDelete() {
    this.postsService.deletePost(this.id);
    this.router.navigate(['/posts']);
  }

  onBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
