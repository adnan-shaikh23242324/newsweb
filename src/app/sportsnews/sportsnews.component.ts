import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.scss']
})
export class SportsnewsComponent implements OnInit {

constructor(private _services:NewsapiservicesService){}
sportsHeadingDisplay:any;
ngOnInit(): void {

this._services.sportsNews().subscribe((result)=>{
console.log(result);
this.sportsHeadingDisplay=result.articles;
})
  
}

}
