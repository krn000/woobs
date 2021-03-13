import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc0 from '@angular/core'
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/cdk/overlay';
import { CampaignComponent } from './campaign/campaign.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { PixelComponent } from './pixel/pixel.component';
import { LiveSupportComponent } from './live-support/live-support.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { MatListModule, MatNavList } from '@angular/material/list';
import { SideNavComponent } from './side-nav/side-nav.component'
import { HttpClientModule } from '@angular/common/http';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA ,MatDialogModule} from '@angular/material/dialog';
import { MaterialModule } from './meterial.module'
import { FormsModule } from '@angular/forms';
import { NewComponentComponent } from './new-component/new-component.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    DiscoveryComponent,
    PixelComponent,
    LiveSupportComponent,
    LogoutComponent,
    ProfileComponent,
    SideNavComponent,
    CreateCampaignComponent,
    NewComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
