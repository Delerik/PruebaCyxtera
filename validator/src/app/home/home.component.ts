import { Component, OnInit,EventEmitter } from '@angular/core';
import { requestUrlService} from './requesturl.service';
import {responseStruct} from './home.responseStruct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  score = 0.7;
  url : string;
  user: string;
  validate: EventEmitter<any> = new EventEmitter();

  constructor(private requesturl: requestUrlService) {
    this.user = JSON.parse(localStorage.getItem("credentials")).username;
    }
    
  ngOnInit() {
   
  
  }
  getUrlScore(){

    this.requesturl.getScore(this.url).subscribe((response:responseStruct) =>{
      this.score=response.calificacion; }    
    )

  }


}
