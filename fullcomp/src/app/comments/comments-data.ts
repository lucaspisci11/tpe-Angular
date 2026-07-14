import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  private url = 'https://6a565607b17de7bebbde27e0.mockapi.io/api/comments';

  constructor(private http: HttpClient) { }

getComments(): Observable<Comment[]> {
  return this.http.get<Comment[]>(this.url);
}

addComment(comment: Comment): Observable<Comment> {
  return this.http.post<Comment>(this.url, comment);
}

deleteComment(id: string): Observable<Comment> {
  return this.http.delete<Comment>(`${this.url}/${id}`);
}

}