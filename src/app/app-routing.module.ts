import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ZoomComponent } from './zoom/zoom.component';


const routes: Routes = [
  {path:'zoom',component:ZoomComponent},
  {path:'editar/:idUsuario', component:EdituserComponent },
  {path:'agregar-clase', component:AddcourseComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
