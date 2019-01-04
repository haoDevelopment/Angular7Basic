import { Component, ViewChild } from '@angular/core';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  public agree : number = 0;
  public disgree : number = 0;
  public names = ['Mr.A', 'Mr.B','Mr.C','Mr.D','Mr.E'];
  @ViewChild(TestComponentComponent) 
  private testComponent : TestComponentComponent;
  parentVote (vote : boolean){
    debugger;
    if(vote) this.agree ++;
    else this.disgree ++;
  }
  changeName(name: string){
    this.testComponent.setName(name);
  }
}
