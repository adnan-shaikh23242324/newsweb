import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {


  constructor(private _services: NewsapiservicesService) { }

  techheadingDisplay: any = [];
  
  ngOnInit(): void {

    this._services.techNews().subscribe((result) => {
      console.log(result);
      this.techheadingDisplay = result.articles;

    })
  }
}
