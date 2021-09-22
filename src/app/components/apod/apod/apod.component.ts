import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApodService } from 'src/app/services/apod.service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodDate = '';

  constructor() { }

  ngOnInit(): void {

  }

  dateChange(dateString: string): void {
    this.apodDate = dateString;
  }

}
