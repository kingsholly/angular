import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-textcomponent',
  templateUrl: './textcomponent.component.html',
  styleUrls: ['./textcomponent.component.css'],
  providers: [RecordsService]
})
export class TextcomponentComponent implements OnInit {
  // email: string;

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromService1(){
    this.infoReceived1= this.dservice.info1
  }
  getInfoFromService2(){
    this.infoReceived2= this.dservice.info2
  }
  getInfoFromService3(){
    this.infoReceived3= this.dservice.info3
  }
  
  constructor(private dservice: RecordsService){}
  ngOnInit(): void {
    
  }
submit(login:any) {
  console.log("form submitted", login)
}
}
