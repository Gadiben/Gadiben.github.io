import { Component, signal } from '@angular/core';

import { Cv } from './cv/cv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('resume-angular');
}
