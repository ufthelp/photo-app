import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { IPhotos } from '../../models/photos.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  data: IPhotos[];
  @Input()
  cols: any;
  displayedColumns;
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.displayedColumns = this.cols;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
}
