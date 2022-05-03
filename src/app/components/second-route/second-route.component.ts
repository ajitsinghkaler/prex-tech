import { Component, OnInit } from '@angular/core';
import { GetExampleService } from '../../services/get-example.service';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.scss'],
})
export class SecondRouteComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'link',
    'created_at',
    'updated_at',
    'type',
    'image',
    'author',
    'publisher',
    'author_related',
    'publisher_related'
  ];
  data = this.exampleS.getData();
  constructor(private exampleS: GetExampleService) {}

  ngOnInit(): void {}
}
