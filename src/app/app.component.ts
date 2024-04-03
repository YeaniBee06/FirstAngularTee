import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  test: string  = 'Programming is a passion that should be felt.';
  text: string = 'Universities in Sierra Leone'
  isBoolean: boolean = false;
  university: string [] = ["University of Makeni","University of Sierra Leone","Canadian University","MMCT University"]

  student1: string [] = [ "Yeaniva Bayoh"];
  student2: string [] = ["Edna Mansaray"];
   apply: string [] = [];



  ComputerScience()  {

     this.apply= this.university;
  }

  Nursing() {

     this.apply = this.university;
  }

  Engineering() {

     this.apply =this.university;
  }

  Accounting() {

     this.apply = this.university;
  }
}
