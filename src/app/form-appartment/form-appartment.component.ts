import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent implements OnInit {
  appartform!:FormGroup
id=0
constructor(private acr:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id']
    this.appartform=new FormGroup({

      numAppart:new FormControl('',Validators.required),
      numEtage:new FormControl('',Validators.required),
      surface:new FormControl('',Validators.required),
      terrasse:new FormControl('',Validators.required),
      surfaceTerrasse:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.id,Validators.required),

    }) }
get numappat(){return this.appartform.get('numAppart')}
    add(){
      console.log("notre form"+JSON.stringify(this.appartform.value))
    }
}
