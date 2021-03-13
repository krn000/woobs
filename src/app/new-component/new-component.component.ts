import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampServiceService } from '../service/camp-service.service';
import { FormsModule } from '@angular/forms';
import { response } from '../campaign/campaign.component';


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  campaign: any = { }
  campId : string = ''

  name: String = '';
  status: String = '';
  
  constructor(private service: CampServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      let campId : string = params.id;
    });
  }

  async ngOnInit() {
    // let params = this.activatedRoute.snapshot.params.id
    await this.service.getcamp(this.activatedRoute.snapshot.params.id, this.campaign)
    .subscribe(
      (res) => { this.campaign = res },
      (err) => { console.log(err) }
    )
    }
}

