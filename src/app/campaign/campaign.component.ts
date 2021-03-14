import { Component, OnInit } from '@angular/core';
import { CampServiceService } from '../service/camp-service.service'
import { Router } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';


export interface response {
  _id: string,
  campName: String,
  status: String
};


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  
url = "http://localhost:4200/"

  campaign: response[] = []

  constructor(public service: CampServiceService,
    public router: Router) { }

  ngOnInit() {
    this.service.getCampaign()
      .subscribe(
        (res: response[]) => { this.campaign = res },
        (err) => { console.log(err) }
      )
  }

  navigate(){
    this.router.navigate(['/create-campaign'])
  }

  selectId(id :String) {
   console.log(id)
  }
}
