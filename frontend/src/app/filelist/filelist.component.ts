import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataRetrieverService } from '../data-retriever.service';
import {AudioplayerComponent} from '../audioplayer/audioplayer.component';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
  fileList: any = [];
  //@Output() myEvent = new EventEmitter();
  @Input()  audioRef:AudioplayerComponent;

  constructor(public rest:DataRetrieverService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.fileList = [];
    this.rest.getList().subscribe((data: {}) => {
      console.log(data);
      this.fileList = data;
    });
  }

  onSelect(id: number)
  {
    console.log("ID: " + id);
    console.log(this.audioRef);
    this.audioRef.onChangeId(id);
  }

}
