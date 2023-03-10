import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'student-app';
  myStudents:any[]=[];
  myWeather:any[]=[];
  constructor(private service:StudentService){

  }

  ngOnInit(): void {
    this.service.getStudentData().subscribe((data)=>{
      this.myStudents = data.students;
    }
    );

    this.service.getWeatherData().subscribe((data)=>{
      this.myWeather = data.weather;
    }
    );
  }
}
