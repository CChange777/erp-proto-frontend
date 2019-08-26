import {Component, Input, OnInit} from '@angular/core';
import {Stakeholder} from "../../core/model/domain.model";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {RestService} from "../../core/service/rest-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stakeholder-view',
  templateUrl: './stakeholder-view.component.html',
  styleUrls: ['./stakeholder-view.component.scss']
})
export class StakeholderViewComponent implements OnInit {

  //@Input()
  stakeholders$: Observable<Stakeholder[]>

  newStakeHolder: Stakeholder = {} as Stakeholder;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.stakeholders$ = this.restService.loadStakeHolders();
  }

  submitStuff() {
    this.restService.postStakeholder(this.newStakeHolder).subscribe(s=>this.newStakeHolder=s);
  }

}
