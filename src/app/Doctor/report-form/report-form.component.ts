import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { ApprovalService } from 'src/app/service/approval.service';
import { Report } from 'src/app/Bean/Report';
import { ActivatedRoute, Routes, Router} from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  doctorName:string;
  report:Report;
  editForm: FormGroup;

  constructor(private basicServiceService:BasicServiceService,private approvalService : ApprovalService,private route: ActivatedRoute,private fb: FormBuilder,private router:Router) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.doctorName =this.basicServiceService.getUserName();
    this.approvalService.getParticularPatientReport(+id,this.doctorName).subscribe(
      (data) =>{
          this.report=data;
          console.log(this.report.cusid);

          this.editForm = this.fb.group({
      
            id: [this.report.id, [
              Validators.required,
            ]],
            medid: [this.report.medid, [
              Validators.required,
            ]],
            cusid: [this.report.cusid, [
              Validators.required,
            ]],
            docid: [this.report.docid, [
              Validators.required,
            ]],  
            actualvalue1: [this.report.actualvalue1, [
              Validators.required,
            ]],
            actualvalue2: [this.report.actualvalue2, [
              Validators.required,
            ]],
            
            normalrange1: [this.report.actualvalue2, [
              Validators.required,
            ]],
            normalrange2: [this.report.normalrange2,[
              Validators.required,
            ]],
            doctorcomments: [this.report.doctorcomments,[
              Validators.required,
            ]],
            actualvalue3:[this.report.actualvalue3,[
              Validators.required
            ]],
            normalrenge3:[this.report.normalrenge3,[
              Validators.required
            ]],
            actualvalue4:[this.report.actualvalue4,[
              Validators.required
            ]],
            normalrenge4:[this.report.normalrenge4,[
              Validators.required
            ]],
            otherinfo:[this.report.otherinfo,[
              Validators.required
            ]]
           
            });
  
  

      }
    )

    this.editForm = new FormGroup({
      
     'id':new FormControl(this.report.id),
     'cusid':new FormControl(this.report.cusid),
     'medid':new FormControl(this.report.medid),
     'docid':new FormControl(this.report.docid),
     //'servicedate':new FormControl(this.report.servicedata),
     //'testresultdate':new FormControl(this.report.testresultdate)
     


  
      });

  }
  
  get id() {
    return this.editForm.get('id');
  }
  get medid() {
    return this.editForm.get('medid');
  }
  get cusid() {
    return this.editForm.get('cusid');
  }
  get docid() {
    return this.editForm.get('docid');
  }
  get servicedate() {
    return this.editForm.get('servicedate');
  }
  get testresultdate() {
    return this.editForm.get('testresultdate');
  }
  get actualvalue1() {
    return this.editForm.get('actualvalue1');
  }
  get normalrange1() {
    return this.editForm.get('normalrange1');
  }
  get actualvalue2() {
    return this.editForm.get('actualvalue2');
  }
  get normalrange2() {
    return this.editForm.get('normalrange2');
  }
  get actualvalue3() {
    return this.editForm.get('actualvalue3');
  }
  get normalrenge3() {
    return this.editForm.get('normalrenge3');
  }
  get actualvalue4() {
    return this.editForm.get('actualvalue4');
  }
  get normalrenge4() {
    return this.editForm.get('normalrenge4');
  }
  get doctorcomments() {
    return this.editForm.get('doctorcomments');
  }
  get otherinfo() {
    return this.editForm.get('otherinfo');
  }

  // onSubmitReportForm(){
  // //     let report : Report={
  // //  id:this.editForm.value.id,
  // //  medid:this.editForm.value.medid,
  // //  cusid:this.editForm.value.cusid,
  // //  docid:this.editForm.value.docid,
  // // //  //servicedate:this.editForm.value["servicedate"],
  // // //  resultdate:this.editForm.value["resultdate"],
  // // //  actualvalue1:this.editForm.value["actualvalue1"],
  // // //  normalrange1:this.editForm.value["normalrange1"],
  // // //  doctorcomments:this.editForm.value["doctorcomments"],
  // // //  otherinfo:this.editForm.value["otherinfo"],
   

  //     }
   
  }



//   onSubmitReportForm(){
//   let newMovie: item = {
//     id: this.movieItem.id, title: this.movieForm.value["movieTitle"], boxOffice: +this.movieForm.value["boxOffice"], active: this.movieForm.value["active"],
//     dateOfLaunch: new Date(this.movieForm.value["dateOfLaunch"]), genre: this.movieForm.value["genre"], hasTeaser: this.movieForm.value["hasTeaser"],
//     poster: this.movieForm.value["poster"]
//   }
//   this.movieService.updateMovie(newMovie).subscribe(
//     (data) => {
//       this.router.navigate(['search-bar'])
//     }
//   );
// }

