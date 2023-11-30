import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Residence } from '../models/residence';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent {
  imageUrl="/assets/images/"
  res:Residence={id:1,name:"",address:"",image:this.imageUrl+"residence1.jpg"}
  @Input() app:Appartement={
    id:1,
    numAppart:0,
    numEtage:0,
    surface:0,
    terrasse:"",
    surfaceTerrasse:0,
    category:"",
    description:"",
    residence:this.res,
    status:true
  }

  @Output() delete=new EventEmitter<Appartement>

  deleteapp(){
this.delete.emit(this.app)
  }
}
