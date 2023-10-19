import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getGitHubUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }
}
