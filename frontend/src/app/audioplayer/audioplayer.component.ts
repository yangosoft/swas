import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {

  @ViewChild('audioplayer') audioplayer: ElementRef;
  audioPath: string = "/a.mp3";
  constructor() {

   }

  ngOnInit() {
      this.audioPath = "/a.mp3";
  }

  onChangeId(id: number)
  {

    console.log("---> Id "  + id);
    this.audioPath = "/play/play/" + id;
    this.audioplayer.nativeElement.pause();
    this.audioplayer.nativeElement.load();
    this.audioplayer.nativeElement.play();

  }

}
