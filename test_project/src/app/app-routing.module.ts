import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {filter} from "rxjs";

const routes: Routes = [
  {path:'',redirectTo:'/jobs', pathMatch:"full"},
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then((mod) => mod.JobsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
