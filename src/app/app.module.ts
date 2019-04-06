import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './all-posts/single-post/single-post.component';
import { PostEditComponent } from './all-posts/single-post/post-edit/post-edit.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { PostDetailComponent } from './all-posts/post-detail/post-detail.component';

import { PostsService } from './services/posts.service';
import { DataStorageService } from './services/data-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    SinglePostComponent,
    PostEditComponent,
    NewPostComponent,
    ShortenPipe,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
