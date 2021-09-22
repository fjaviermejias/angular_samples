import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {

  @Input() date = '';
  apod: any = {};
  apiLoaded = false;

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.service.getApodData(changes.date.currentValue).subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
    
  }

  processData(data: any): void {
    this.apod = data;
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
}
