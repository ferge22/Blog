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
  id: number;
  post: Post;
  editMode = false;
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
        this.id = paramMap.get('id');
        console.log(this.id);
        this.post = this.postService.getPost(paramMap.get('id'));
        // if there is id sets edit mode to true
        this.editMode = paramMap.get('id') != null;
        // custom from validation with preset values
        this.postForm =  new FormGroup({
          title: new FormControl(this.post.title, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(30), Validators.minLength(1)]
          }),
          description: new FormControl(this.post.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(230), Validators.minLength(1)]
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
    console.log(this.postForm.value);
    if (this.editMode) {
      this.postService.updatePost(this.id,
        new Post(
        this.postForm.value.title,
        this.postForm.value.description,
        this.postForm.value.imagePath));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
