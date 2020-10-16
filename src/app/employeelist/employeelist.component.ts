import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

	employees;
  constructor(private testService:TestService) {

   }

  ngOnInit() {
  	this.testService.getEmployee().subscribe((data)=>{
      //console.log(data);
      this.employees = data['employees'];
    });
  }


}
