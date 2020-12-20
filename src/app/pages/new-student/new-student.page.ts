import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public myForm:FormGroup;
  public student:Estudiante;
  constructor(private studentService:EstudianteService, private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["",[Validators.required, Validators.minLength(3),Validators.maxLength(150)]],
      controlnumber: ["",[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      curp: ["",[Validators.required, Validators.pattern('([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9]{2})')]],
      age: [0,[Validators.required]],
      active: [false,[Validators.required]]
    });
  }

  create(){
    this.student = {
      name: this.myForm.controls.name.value,
      controlnumber: this.myForm.controls.controlnumber.value,
      curp: this.myForm.controls.curp.value,
      age: this.myForm.controls.age.value,
      active: this.myForm.controls.active.value
    }

    this.studentService.createStudent(this.student);
  }

}
