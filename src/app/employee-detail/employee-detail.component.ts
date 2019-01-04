import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../services/employee/employee.service";
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {

  public _id : number;
  public subscription: any;
  public employee = new Employee();
  constructor(private router : Router, 
              private activatedRouted : ActivatedRoute,
              private employeeService : EmployeeService
    ) { }

  ngOnInit() {
    this.subscription = this.activatedRouted.params.subscribe(params =>{
      this._id = params['id'];
    });
    this.getEmployeeById();
  }
  getEmployeeById(){
    this.employeeService.getEmployeeById(this._id).subscribe(data => {
      this.employee = data;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
