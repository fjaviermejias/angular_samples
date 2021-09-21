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

  apod: any = {};
  apiLoaded = false;
  selectedDate!: NgbDateStruct;
  date!: { year: number, month: number };

  constructor(public service: ApodService) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.service.getApodData().subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
  }

  processData(data: any): void {
    this.apod = data;
  }

  processError(error: any): void {
    console.log(error);
  }

  dateChange(dateString: string): void {
    this.service.getApodData(dateString).subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
  }

}
