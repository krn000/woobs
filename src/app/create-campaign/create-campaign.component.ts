import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampServiceService } from '../service/camp-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  campaign: any = {
    campName: '',
    status: ''
  }
  constructor(private service: CampServiceService,
    public router: Router) { }

  ngOnInit() {
  }

  registerCamp() {
    this.service.postCampaign(this.campaign)
      .subscribe((res) => { console.log(res) },
        (err) => { console.log(err) })

        this.router.navigate(['/campaign'])
  }
}
