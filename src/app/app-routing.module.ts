
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';



const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'newBlog', component: NewBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
