import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-generalnews',
  templateUrl: './generalnews.component.html',
  styleUrls: ['./generalnews.component.scss']
})
export class GeneralnewsComponent {
  generalHeadingDisplay:any;
  constructor(private _services:NewsapiservicesService){}

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result)=>{
      console.log(result);
      this.generalHeadingDisplay=result.articles; 
      
    })

    
  }

}
