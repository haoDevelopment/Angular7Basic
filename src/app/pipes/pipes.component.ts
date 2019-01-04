import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  public title: string = 'Pipes work!';
  public formatDate = Date.now();
  a: number = 0.259;
  b: number = 1.349545666;
  ngOnInit() {
  }

}
