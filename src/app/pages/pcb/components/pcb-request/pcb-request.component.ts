import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pcb-request',
  templateUrl: './pcb-request.component.html',
  styleUrls: ['./pcb-request.component.scss'],
})
export class PcbRequestComponent implements OnInit {
  

  formLogin: FormGroup;


  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
  ) { 
    this.formLogin = fb.group({
      'correo': [null, Validators.required],
      'password': [null, Validators.required],
      'pin': [null],
      'recordar': [true]
    });
  }

  ngOnInit() {}

  swipeNext(slides, event){
    console.log(slides, event)
    slides.slideNext();
  }
}
