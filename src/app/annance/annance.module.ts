import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnnanceComponent } from './list-annance/list-annance.component';
import { AnnanceComponent } from './annance.component';
import { AnnanceRoutingModule } from './annance-routing.module';



@NgModule({
  declarations: [ 
     AnnanceComponent,
    ListAnnanceComponent],
  imports: [
    CommonModule,
    AnnanceRoutingModule,
  
  ]
})
export class AnnanceModule { }
