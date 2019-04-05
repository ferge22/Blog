import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  @ViewChild('f') postForm: NgForm;
  newPost: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const formValue = form.value;
    const newPost = new Post(formValue.title, formValue.descpription, formValue.imagePath);
    this.postsService.addPost(newPost);
  }

}
