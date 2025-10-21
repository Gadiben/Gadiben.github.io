
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvHeaderComponent } from './header/header.component';
import { CvCenterComponent } from './center/center.component';
import { CvRightComponent } from './right/right.component';
import { ActivatedRoute } from '@angular/router';
import { CV_DATA_FR } from './data/cv-data.fr';
import * as cv_en from '../../assets/cv-data.en.json';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, CvHeaderComponent, CvCenterComponent, CvRightComponent],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})

export class Cv implements OnInit {
  cvData: any = null;
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    let lang = this.route.snapshot.data['lang'] || 'fr';
  this.cvData = lang === 'en' ? cv_en : CV_DATA_FR;
  }
}
