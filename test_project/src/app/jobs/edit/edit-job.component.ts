import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {CrudService} from "../common/crud.service";
import {Job} from "../model/job";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-edit',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit{
  public success: boolean = false;
  public selectedId: number;
  public jobForm: FormGroup
  constructor(
    private route: ActivatedRoute,
    public router:Router,
    public service: CrudService,
    private Date: DatePipe) {

    this.route.params.subscribe(params => {
      this.selectedId =  +params['id'];
    })

  }
  ngOnInit() {
    this.initForm()
    this.service.getJobDetails(this.selectedId).subscribe(data=>{
     this.setDatatoForm(data)
   })



  }
  onSubmit(){
    this.jobForm.value.job_start_date = this.Date.transform(this.jobForm.value.job_start_date,'yyyy-MM-dd');
    this.jobForm.value.job_close_date = this.Date.transform(this.jobForm.value.job_close_date,'yyyy-MM-dd');
    console.log(this.jobForm.value)
    this.service.updateJob(this.selectedId,  this.jobForm.value).subscribe(res=>{
      this.success = true;
      setTimeout(()=>{
        this.router.navigate(['/jobs'])
      }, 2000)
    })
  }
  initForm(){
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
  setDatatoForm(current){
    Object.keys(this.jobForm.controls).forEach(item=>{
      this.jobForm.controls[item].setValue(current[item])
    })
  }
}
