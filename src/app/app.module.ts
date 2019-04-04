import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './all-posts/single-post/single-post.component';
import { PostEditComponent } from './all-posts/single-post/post-edit/post-edit.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { PostDetailComponent } from './all-posts/post-detail/post-detail.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
