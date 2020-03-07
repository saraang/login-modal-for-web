import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular1';
openNavbar = false;
  toggleNavbar(){
     this.openNavbar = !this.openNavbar;
    console.log(this.openNavbar);
    console.log("hi")
  }
}