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

  name: String = '';
  status: String = '';
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
      this.name = camp.campName;
      this.status = camp.status;
    }
  }

  update() {
    this.service.update(this.activatedRoute.snapshot.params.id, this.campaign)
      .subscribe((res) => { console.log(res) },
                  (err) => {console.log(err)})
    this.router.navigate(['/campaign'])
  }
}

