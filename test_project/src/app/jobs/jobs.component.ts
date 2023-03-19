import {Component, OnInit} from '@angular/core';
import {CrudService} from "./services/crud.service";
import {Observable} from "rxjs";
import {Job} from "./model/job";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements  OnInit{
  public jobs$:Observable<any>
  filter = new FormControl('', { nonNullable: true });
  constructor(public service: CrudService, public router: Router) {
  }
 ngOnInit() {
    this.jobs$ = this.service.getJobs()
 }
  addJob(){
    console.log('dsadasdas')
  }
}
