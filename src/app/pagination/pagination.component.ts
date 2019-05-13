import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pageNumber:number=1;

  constructor() { }

  ngOnInit() {}

  onClickNext(){
    this.pageNumber++;
  }

  onClickPrevious(){
    this.pageNumber--;
  }
}
