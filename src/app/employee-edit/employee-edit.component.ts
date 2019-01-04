import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../services/employee/employee.service";
import { Employee } from '../models/employee';
import { debounceTime } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
  public _id : number;
  public subscription: any;
  public employee = new Employee();
  public isEdit = false;
  public title = 'Add new';
  constructor(private router : Router, 
              private activatedRouted : ActivatedRoute,
              private employeeService : EmployeeService
    ) { }

  ngOnInit() {
    this.subscription = this.activatedRouted.params.subscribe(params =>{
      this._id = params['id'];
      if(this._id && this._id > 0)
        {
          this.isEdit = true;
          this.title = 'Edit';
          this.getEmployeeById();
        }
    });
  }
  Save(){
    if(this.isEdit){
      if(!this.employee) {
        alert('Can\'t update data.');
        return false;
      }
      debugger;
      this.employeeService.Update(this.employee).subscribe(response =>{
        if(response){
          alert('Update successfully');
          this.router.navigate(['/employee']);
        }
      })
    }else{
      this.employeeService.Add(this.employee).subscribe(response =>{
        debugger;
        if(response){
          alert('Add new successfully');
          this.router.navigate(['/employee']);
        }
      })
    }
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
