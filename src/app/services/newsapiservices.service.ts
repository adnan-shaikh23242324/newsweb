import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //newsapiurl
  API_KEY: string = "42fd26ce667a4a7aa04a7d9b4d31811e";
  newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`;

  // technewsapiurl

  techApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${this.API_KEY}`;

  //businessnewsapiurl
  businessApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.API_KEY}`;
  
  //sportsnewsapiurl

  sportsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.API_KEY}`;
  
  //healthnewsapiurl

  healthApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${this.API_KEY}`;
  
  entertainmentApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${this.API_KEY}`;
  generalApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${this.API_KEY}`;
  
  //topheading
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

  sportsNews(): Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

  healthNews(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
  entertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }
  generalNews(): Observable<any> {
    return this._http.get(this.generalApiUrl);
  }

}
