import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { JobsComponent } from './jobs.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CrudService} from "./services/crud.service";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
      {path: '', component: JobsComponent},
];

@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),
    AsyncPipe,
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[CrudService]
})
export class JobsModule { }
