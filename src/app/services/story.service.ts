import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };
export class StoryService {
  private apiUrl: string = 'http://localhost:5000/photos';

  constructor(private http: HttpClient) {}

  // make the async return an observable
  getStories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
