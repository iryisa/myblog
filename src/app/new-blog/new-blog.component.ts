import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { Post } from './../models/post.model';
import { PostsService } from './../posts.service';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostsService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const values = this.formulario.value;
    const post = new Post(values.categoria, values.titulo, values.texto, values.autor, values.imagen);
    this.postsService.agregarPost(post);
  }

}
