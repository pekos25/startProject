import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(){
    $('#year').text(new Date().getFullYear());
  }
}
