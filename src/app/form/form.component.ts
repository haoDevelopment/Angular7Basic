import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public cities = [
    {ID : 1, Name : 'TP.HCM'},
    {ID : 2, Name : 'Hà Nội'},
    {ID : 3, Name : 'Đà Nẵng'}
  ]
  onSubmitForm(data : any){
    console.log(data);
  }

}
