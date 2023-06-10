import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'she-sharp';
  constructor(private service:ApiService ){}
  jobs: any = [];
  showWelcomePage: boolean = true;
  CompanyFilter = "";
  
  DepartmentListWithFilter: any = [];
  //dataArray: any = [];
  ngOnInit(): void {
    this.show();
    
    //const dataArray = Object.keys(this.jobs).map(key => ({ key, value: this.jobs[key] }));
    //console.log(this.dataArray);
    
  }
   show() {
    this.service.test().subscribe(data => {
      this.jobs = data["data"];
      console.log(data);
      console.log(this.showWelcomePage)
    }
    );
  }
  filter() {
    var CompanyFilter = this.CompanyFilter;

    this.jobs = this.DepartmentListWithFilter.filter(
      function (el: any) {
        return el.company.toString().toLowerCase().includes(
          CompanyFilter.toString().trim().toLowerCase()
        )
      }
    );
  }
}
