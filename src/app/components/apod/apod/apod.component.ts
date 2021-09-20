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
    console.log(this.apod);
  }

  processError(error: any): void {
    console.log(error);
  }

  // returns youtube id from url
  getYoutubeId(): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = this.apod.url.match(regExp);
    return match && match[2].length == 11 ? match[2] : '';
  }


  updateDate(date: NgbDateStruct): void {
    console.log(date.year + '-' + date.month + '-' + date.day);
    this.service.getApodData(date.year + '-' + date.month + '-' + date.day).subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
  }

}
