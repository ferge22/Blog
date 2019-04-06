import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Response } from 'selenium-webdriver/http';

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
        (response: Response) => {
          console.log(response);
        }
      );
  }

  getPosts() {
    this.dataStorageService.getPosts();
  }

}
