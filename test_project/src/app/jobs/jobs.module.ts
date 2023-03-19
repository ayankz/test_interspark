import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { JobsComponent } from './jobs.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CrudService} from "./services/crud.service";
import {ReactiveFormsModule} from "@angular/forms";
import { AddJobComponent } from './add/add-job.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
const routes: Routes = [
      {path: '', component: JobsComponent},
      {path:'new', component: AddJobComponent}

];

@NgModule({
  declarations: [
    JobsComponent,
    AddJobComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),
    AsyncPipe,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers:[CrudService]
})
export class JobsModule { }
