import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'app';
  scholarships: Scholarship[];
  public orderByField;
  public setOrderBy = (field) => {  
    if (this.orderByField === field) return;
    this.orderByField = field;
  }

  constructor(private dataService: DataService) {}

  ngOnInit() { // run when the component is initialized
    this.dataService.getJSON().subscribe((scholarships) => {
      this.scholarships = scholarships.data.scholarships;
    });
	this.setOrderBy('name');
  }
}

interface Scholarship {
  id: number;
  name: string;
  award: Award;
}

interface Award {
  amount: string;
  desc: string;
}
