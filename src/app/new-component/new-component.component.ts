import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampServiceService } from '../service/camp-service.service';
import { FormsModule } from '@angular/forms';
import { response } from '../campaign/campaign.component';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  campaign: any = {}
  campId: string = ''
  private apiURL = "http://localhost:3000";
  model:any = {
    campName: this.campaign.campName,
    status: this.campaign.status 
  }
 
  message: string = '';

  constructor(private service: CampServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(params => {
      let campId: string = params.id;
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.campaign = await this.service.getcamp(this.activatedRoute.snapshot.params.id, this.campaign)
      .toPromise();
    for (let camp of this.campaign) {
      this.model.campName = camp.campName;
      this.model.status = camp.status;
    }
  }

  update() {
   for(let cmp of this.campaign){
    this.service.update(cmp._id, this.model).subscribe((campaign) => {
      this.campaign = this.model;
      this.router.navigate(['/']);
    })
   }
  }
}

