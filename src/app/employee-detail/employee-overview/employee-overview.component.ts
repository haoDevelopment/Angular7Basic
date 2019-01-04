import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

  constructor(private activatedRouted : ActivatedRoute) { }
  public _id : number;
  ngOnInit() {
    this.activatedRouted.parent.params.subscribe(params =>{
      this._id = params['id'];
      console.log(this._id);
    });
  }

}
