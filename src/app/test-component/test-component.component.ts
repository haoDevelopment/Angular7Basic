import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { }
  
  @Input() name: string;
  @Output() onVote = new EventEmitter<boolean>();
  public voted : boolean = false;
  ngOnInit() {
  }
  vote(agree: boolean){
    this.voted = true;
    this.onVote.emit(agree);
  }
  setName(name : string){
    this.name = name;
  }

}
