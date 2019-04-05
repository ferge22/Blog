import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})

export class PostEditComponent implements OnInit {
  // id: number;



  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = params.id;
    //     }
    //   );

  }

}
