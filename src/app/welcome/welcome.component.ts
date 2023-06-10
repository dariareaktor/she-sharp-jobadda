import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
   constructor(private service:ApiService ){}
  jobs: any = [];
  
  showWelcomePage: boolean = true;
 typewriter_text: string = "Welcome to JobsAdda !";
  typewriter_display: string = "";
  ngOnInit() {
    this.typingCallback(this);
    console.log(this.showWelcomePage)
}
typingCallback(that:any) {
  let total_length = that.typewriter_text.length;
  let current_length = that.typewriter_display.length;
  if (current_length < total_length) {
    that.typewriter_display += that.typewriter_text[current_length];
    setTimeout(that.typingCallback, 100, that);
  } else {
    that.typewriter_display = "Welcome to JobsAdda !";
  }
}
 
}
