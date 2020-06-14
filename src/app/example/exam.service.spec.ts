//import { TestBed } from '@angular/core/testing';

//import { ExamService } from './exam.service';

//describe('ExamService', () => {
  //let service: ExamService;

  //beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(ExamService);
  //});

  //it('should be created', () => {
   // expect(service).toBeTruthy();
  //});
//});

import { Component } from '@angular/core/testing';
import { falsService } from './exam.service';
@Component({
  selector: 'app-root',
  templateURL: './app/component.html'
  styleUrls: ['./app.component.css'],
  providers: [falsService]
})
export class AppComponent {
  constructor(private fals: falsService) {}
  funcDemo(qty) {
    this.fals.falsPoster(qty);
  }
}