import {
  afterNextRender,
  ChangeDetectorRef,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Comment } from './comment';
import { CommentsDataService } from './comments-data';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments {

  comments: Comment[] = [];

  commentForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    comment: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  constructor(
    private commentsDataService: CommentsDataService,
    private changeDetector: ChangeDetectorRef
  ) {
    afterNextRender(() => {
      this.loadComments();
    });
  }

  loadComments(): void {
    this.commentsDataService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments;
        this.changeDetector.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener comentarios:', error);
      }
    });
  }

  sendComment(): void {
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    const newComment: Comment = this.commentForm.getRawValue();

    this.commentsDataService.addComment(newComment).subscribe({
      next: (savedComment) => {
        this.comments.push(savedComment);
        this.commentForm.reset();
        this.changeDetector.detectChanges();
      },
      error: (error) => {
        console.error('Error al guardar el comentario:', error);
      }
    });
  }

  deleteComment(comment: Comment): void {
    if (!comment.id) {
      return;
    }

    this.commentsDataService.deleteComment(comment.id).subscribe({
      next: () => {
        this.comments = this.comments.filter(
          item => item.id !== comment.id
        );

        this.changeDetector.detectChanges();
      },
      error: (error) => {
        console.error('Error al eliminar el comentario:', error);
      }
    });
  }

}