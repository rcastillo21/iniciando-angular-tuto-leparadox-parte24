import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Photos } from '../others/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parte24';

  filtros: FormGroup;

  constructor(
    private _api: ApiService,
    private _fb: FormBuilder,
    private _ac: ActivatedRoute,
    private _router: Router
  ) {
    this.filtros = this._fb.group({
      orderby: this.order_by,
      descending: this.descending,
      items: this.items
    });
    this._ac.queryParamMap.subscribe(params => {
      this.descending = params.get('descending') || 'yes';
      const previousItems = this.items
      this.items = parseInt(params.get('items')) || 25;
      this.filtros.setValue({
        orderby: this.order_by,
        descending: this.descending,
        items: this.items
        //items: this.items
      }, { emitEvent: false})
      if(previousItems != this.items) this.ngOnInit();
    });
    this.filtros.valueChanges.subscribe(values =>{
      this._router.navigate(['/'], { queryParams: values })
      //this._router.navigate(['/'], {})
      //this._router.navigate(['/'], { queryParams: {descending: this.descending } })
    })
  }

  order_by = 'added_at';
  descending = 'yes';
  items = 25;

  photo: Photos[] = [];

  ngOnInit() {
    this._api.getPhotos(this.items).subscribe(photos => this.photo = photos);
  }
}
