import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() singlePost: Post;
  @Input() index: number;
  @Input() itemsPerPage: number;
  @Input() currentPage: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.index = (this.itemsPerPage * (this.currentPage - 1)) + this.index;
  }

  onLoadSinglePost() {
    console.log(this.index);
    // this.router.navigate(['/posts/'])
  }

}
