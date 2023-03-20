import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../common/crud.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit{
  public success: boolean = false;
  constructor(public service: CrudService, private Date: DatePipe, public route:Router) {
  }
  public jobForm: FormGroup
 ngOnInit() {
    this.jobForm = new FormGroup({
      job_number : new FormControl('', [Validators.required]),
      job_title : new FormControl('', [Validators.required]),
      number_of_openings : new FormControl('', [Validators.required]),
      job_notes : new FormControl('', [Validators.required]),
      job_start_date : new FormControl('', [Validators.required]),
      job_close_date : new FormControl('', [Validators.required]),
      experience_required : new FormControl('', [Validators.required]),
    })
 }
  onSubmit(){
    this.jobForm.value.job_start_date = this.Date.transform(this.jobForm.value.job_start_date,'yyyy-MM-dd');
    this.jobForm.value.job_close_date = this.Date.transform(this.jobForm.value.job_close_date,'yyyy-MM-dd');
    this.service.addJob(this.jobForm.value).subscribe(res=>{
      this.success = true;
      setTimeout(()=>{
        this.route.navigate(['/jobs'])
      }, 2000)
    })
  }
}
