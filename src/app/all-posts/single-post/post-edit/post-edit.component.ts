import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})

export class PostEditComponent implements OnInit {
  post: Post;
  postForm: FormGroup;

  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap: Params) => {
        if (!paramMap.has('id')) {
          this.router.navigate(['/posts']);
          return;
        }
        this.post = this.postService.getPost(paramMap.get('id'));
        this.postForm =  new FormGroup({
          title: new FormControl(this.post.title, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(30)]
          }),
          description: new FormControl(this.post.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          }),
          imagePath: new FormControl(this.post.imagePath, {
            updateOn: 'blur',
            validators: [Validators.required]
          })
        });
        console.log(this.post);
        }
      );
  }

  onSubmit() {
    console.log(this.postForm);
  }

  onCancel() {
    this.router.navigate(['/posts'])
  }

}
