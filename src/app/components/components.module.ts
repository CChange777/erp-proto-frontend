import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RestService} from "../core/service/rest-service";

@NgModule({
  declarations: [],
  providers: [RestService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
