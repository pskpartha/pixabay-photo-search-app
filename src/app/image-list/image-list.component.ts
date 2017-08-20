import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  pixaImages: any [];

  constructor(private imageService : ImageService) { }

  searchImage(query: string){
    return this.imageService.getImages(query).subscribe(
      data => console.log(data),
      error =>  console.log(error),
      () => console.log("Request Completed")

    )

  }

  ngOnInit() {
  }

}
