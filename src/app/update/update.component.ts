import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../models/residence';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  imageUrl="/assets/images/"
  appartform!:FormGroup
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
  @Output() updateform=new EventEmitter<Appartement>
  constructor(private acr:ActivatedRoute){}
  ngOnInit(): void {
   // this.id=this.acr.snapshot.params['id']
    this.appartform=new FormGroup({

      numAppart:new FormControl(this.app.numAppart,Validators.required),
      description:new FormControl(this.app.description,[Validators.required,Validators.minLength(10)]),
      residence:new FormControl(this.res.id,Validators.required),

    }) }

get numappart(){return this.appartform.get('numAppart')}
get description(){return this.appartform.get('description')}
    add(){
      console.log("notre form"+JSON.stringify(this.appartform.value))
      this.app.numAppart=this.appartform.value.numAppart
      this.app.description=this.appartform.value.description
      this.updateform.emit(this.app)
    }

}
