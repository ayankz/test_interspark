import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../model/job";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public http: HttpClient) { }
  getJobs():Observable<any>{
    return this.http.get('http://localhost:3000/jobs')
  }
  addJob(job):Observable<any>{
    return this.http.post('http://localhost:3000/jobs', job)
  }
}
