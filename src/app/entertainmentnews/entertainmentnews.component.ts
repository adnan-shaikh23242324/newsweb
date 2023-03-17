import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.scss']
})
export class EntertainmentnewsComponent implements OnInit {
  entertainmentHeadingDisplay:any;
  constructor(private _services:NewsapiservicesService){}

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result)=>{
      console.log(result);
      this.entertainmentHeadingDisplay=result.articles; 
      
    })

    
  }
}
