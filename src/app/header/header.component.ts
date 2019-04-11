import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { HttpEvent } from '@angular/common/http';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status = false;
  status2 = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  toogleNav() {
    this.status = !this.status;
  }

  toogleNav2() {
    this.status2 = !this.status2;
  }

  onSaveServer() {
    this.dataStorageService.storePosts()
      .subscribe(
        (posts: HttpEvent<Post[]>) => {
          console.log(posts);
        }
      );
  }

  getPosts() {
    this.dataStorageService.getPosts();
  }

}
