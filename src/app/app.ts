import { Component } from '@angular/core';
import { projects } from './projects';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly projects = projects;
}
