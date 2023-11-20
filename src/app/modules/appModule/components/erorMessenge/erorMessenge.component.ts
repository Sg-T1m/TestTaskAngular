import { Component, OnInit } from '@angular/core';
import { PostReqstStatus } from 'app/inteface/postReqstStatus';
import { PersonalDataUserService } from '../../services/personalDataUser.service';
@Component({
  selector: 'app-erorMessenge',
  templateUrl: './erorMessenge.component.html',
  styleUrls: ['./erorMessenge.component.css']
})
export class ErorMessengeComponent implements OnInit {

  constructor(
    private _PersonalDataUserService:PersonalDataUserService
  ) { }

  ngOnInit() {
  }
  public closeErrorMesenge(){
    const statusOff: PostReqstStatus = {
      errorChange: false,
        trueChange: false,
    };
 
    this._PersonalDataUserService.serStausReqst(statusOff);
  }
}
