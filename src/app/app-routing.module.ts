import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostDetailComponent } from './all-posts/post-detail/post-detail.component';
import { PostEditComponent } from './all-posts/single-post/post-edit/post-edit.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: AllPostsComponent},
  {path: 'posts/new', component: NewPostComponent},
  {path: 'posts/:id', component: PostDetailComponent },
  {path: 'posts/:id/edit', component: PostEditComponent},
  {path: '**', redirectTo: '/posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
