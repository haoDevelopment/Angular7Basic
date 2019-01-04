import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { Employee } from "../models/employee";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public pages : number[];
  constructor(private employeeService : EmployeeService,
              private route : Router,
              private activatedRoute: ActivatedRoute) { }
  public employees : Employee[];
  public currentPage : number;
  public key : string;
  ngOnInit() {
    this.pages = [1,2,3,4,5];
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params['p'] || 1 ;
      console.log(this.currentPage);
    });
    this.getList();
  }
  Delete(id : number){
    let _confirm = confirm('Do you sure to delete record?');
    if(_confirm){
      this.employeeService.Delete(id).subscribe(response => {
        if(response){
          alert('Delete successfuly');
          this.getList();
        }
      })
    }
  }
  getList(){
    this.employeeService.getList().subscribe(response =>{
      this.employees = response;
    });
  }
  search(){
    this.employeeService.searchEmp(this.key).subscribe(response =>{
      this.employees = response;
    });
  }

}
