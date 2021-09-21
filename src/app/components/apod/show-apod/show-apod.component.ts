import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit {

  @Input() apod: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // returns youtube id from url
  getYoutubeId(): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = this.apod.url.match(regExp);
    return match && match[2].length == 11 ? match[2] : '';
  }
}
