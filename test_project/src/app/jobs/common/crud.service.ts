import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../model/job";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url:string = 'http://localhost:3000/jobs';
  constructor(public http: HttpClient) { }
  getJobs():Observable<any>{
    return this.http.get(this.url)
  }
  addJob(job:Job):Observable<any>{
    return this.http.post(this.url, job)
  }
  deleteJob(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
  getJobDetails(id:number):Observable<Job>{
    return this.http.get<Job>(`${this.url}/${id}`)
  }
  updateJob(id:number, job:Job):Observable<any>{
    return this.http.put(`${this.url}/${id}`, job)
  }
}
