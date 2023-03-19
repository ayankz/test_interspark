import {Component, OnInit} from '@angular/core';
import {CrudService} from "./services/crud.service";
import {Observable} from "rxjs";
import {Job} from "./model/job";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements  OnInit{
  public jobs$:Observable<any>
  filter = new FormControl('', { nonNullable: true });
  constructor(public service: CrudService) {
  }
 ngOnInit() {
    this.jobs$ = this.service.getJobs()
 }
}
