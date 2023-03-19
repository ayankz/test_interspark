import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit{
  public jobForm: FormGroup
 ngOnInit() {
    this.jobForm = new FormGroup({
      number : new FormControl('', [Validators.required]),
      title : new FormControl('', [Validators.required]),
      openings : new FormControl('', [Validators.required]),
      note : new FormControl('', [Validators.required]),
      start : new FormControl('', [Validators.required]),
      close : new FormControl('', [Validators.required]),
      experience : new FormControl('', [Validators.required]),
    })
 }
  onSubmit(){
    console.log(this.jobForm.value)
  }
}
