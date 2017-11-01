import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DataService } from './service/data.service';
import { FilterPipe } from './pipe/filter.pipe';
import { NewlinePipe } from './pipe/newline.pipe';

@NgModule({
  declarations: [ AppComponent, FilterPipe, NewlinePipe ],
  imports: [ BrowserModule, HttpModule, NgbModule.forRoot(), FormsModule ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
