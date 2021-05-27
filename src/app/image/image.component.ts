import { Component, OnInit } from '@angular/core';
import {ImageService} from './shared/image.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'image-detail',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
   image :any
  constructor(private imageservice : ImageService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.image=this.imageservice.getImage(
      +this.route.snapshot.params['id']
    )

} }

