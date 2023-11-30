import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnanceComponent } from './annance.component';
import { RouterModule, Routes } from '@angular/router';
import { ListAnnanceComponent } from './list-annance/list-annance.component';


const ROUTES:Routes=[
{path:"annance",component:AnnanceComponent,
children:[
{path:'list',component:ListAnnanceComponent}
]
}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
  ,
  exports:[RouterModule]
})
export class AnnanceRoutingModule { }
