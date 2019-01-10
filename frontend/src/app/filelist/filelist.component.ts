import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../data-retriever.service';


@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
  fileList: any = [];

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

}
