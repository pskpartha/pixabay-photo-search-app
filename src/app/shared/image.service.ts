import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService{
  private query: string;
  private api_key: string = environment.pixabay_api_key;
  private api_url: string = environment.pixabay_api_url;
  private URL: string = this.api_url + this.api_key + '&q='
  private perPage: string = '&per_page=10';



  constructor(private http:Http){  }

  getImages(query){

    return this.http.get(this.URL + query + this.perPage)
    .map(res => res.json());
  }




}
