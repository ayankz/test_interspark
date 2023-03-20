import {Component, OnInit} from '@angular/core';
import {CrudService} from "./common/crud.service";
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
  public jobs$:Job[]
  public searchText:string = '';
  constructor(public service: CrudService, public router: Router) {
  }
 ngOnInit() {
    this.service.getJobs().subscribe(res=>{
      this.jobs$ = res
    })
 }
  onDelete(id){
    this.service.deleteJob(id).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
