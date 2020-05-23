import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contant-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}
  onLog(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }
  ngOnInit(): void {}
}
