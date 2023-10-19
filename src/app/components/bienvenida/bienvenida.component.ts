import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  githubUser: any; // Almacena los datos del usuario de GitHub

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    
    this.githubService.getGitHubUser('renatonani').subscribe((data) => {
      this.githubUser = data;
    });
  }
}
