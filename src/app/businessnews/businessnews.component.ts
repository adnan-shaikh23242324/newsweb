import { Component } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent {
  constructor(private _services: NewsapiservicesService) { }

  businessheadingDisplay: any = [];
  
  ngOnInit(): void {

    this._services.businessNews().subscribe((result) => {
      console.log(result);
      this.businessheadingDisplay = result.articles;

    })
  }

}
