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

  constructor(private dataService: DataService) {}

  ngOnInit() { // run when the component is initialized
    this.dataService.getJSON().subscribe((scholarships) => {
      this.scholarships = scholarships.data.scholarships;
    });
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
