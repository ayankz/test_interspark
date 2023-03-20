import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe} from '@angular/common';
import { JobsComponent } from './jobs.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CrudService} from "./common/crud.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddJobComponent } from './add/add-job.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { EditJobComponent } from './edit/edit-job.component';
import { SearchPipe } from './common/search.pipe';
const routes: Routes = [
      {path: '', component: JobsComponent},
      {path:'new', component: AddJobComponent},
      {path:':id', component:EditJobComponent}

];

@NgModule({
  declarations: [
    JobsComponent,
    AddJobComponent,
    EditJobComponent,
    SearchPipe
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
    MatButtonModule,
    FormsModule
  ],
  providers:[CrudService, DatePipe]
})
export class JobsModule { }
