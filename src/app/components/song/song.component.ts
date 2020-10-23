import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { Photos } from '../others/interfaces';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    //this.image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.data.thumbnailUrl})`);
    this.image = this._sanitizer.bypassSecurityTrustResourceUrl(this.data.thumbnailUrl);
  }

  @Input('datax') data: Photos;

  image: SafeUrl;

}
