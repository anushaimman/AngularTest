import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserDEtailsService } from './user-details.service';
import { UserIDListComponent } from './user-idlist/user-idlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsListComponent,
    UserIDListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [UserDEtailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
