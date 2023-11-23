import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


variable:string="bonjour esprit"
v2:boolean=false
message:string=''

prop:string='towaybindig'
show(){

  this.message='test event binding'

}

}
