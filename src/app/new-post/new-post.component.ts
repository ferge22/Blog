import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  newPost: Post;

  constructor(
  private postsService: PostsService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const formValue = form.value;
    console.log(formValue);
    const newPost = new Post(formValue.title, formValue.description, formValue.imagePath);
    this.postsService.addPost(newPost);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
