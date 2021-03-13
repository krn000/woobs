import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { LiveSupportComponent } from './live-support/live-support.component';
import { LogoutComponent } from './logout/logout.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PixelComponent } from './pixel/pixel.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path:'campaign',
  component: CampaignComponent
},{
  path:'discovery',
  component: DiscoveryComponent
},{
  path:'pixel',
  component: PixelComponent
},{
  path:'profile',
  component: ProfileComponent
},{
  path:'live-support',
  component: LiveSupportComponent
},{
  path: 'logout',
  component: LogoutComponent
},{
  path: '',
  component: CampaignComponent
},{
  path:'create-campaign',
  component: CreateCampaignComponent
},{
  path:'edit-camp/:id',
  component: NewComponentComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
