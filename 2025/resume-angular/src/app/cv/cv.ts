
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../assets/cv-data.json';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})

export class Cv implements OnInit {
  cvData: any = null;

  async ngOnInit() {
    this.cvData = data;
  }
}
