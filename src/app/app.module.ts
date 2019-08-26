import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StakeholderViewComponent } from './components/stakeholder-view/stakeholder-view.component';
import { SingleStakeholderComponent } from './components/stakeholder-view/single-stakeholder/single-stakeholder.component';
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    StakeholderViewComponent,
    SingleStakeholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
