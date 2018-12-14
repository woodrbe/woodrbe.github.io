import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {wow} from '../../assets/js/wow.min.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit() {

    new wow().init();
  }



}
