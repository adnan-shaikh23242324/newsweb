import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.scss']
})
export class HealthnewsComponent implements OnInit {
  healthHeadingDisplay:any;
  constructor(private _services:NewsapiservicesService){}

  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{
      console.log(result);
      this.healthHeadingDisplay=result.articles; 
      
    })

    
  }

}
