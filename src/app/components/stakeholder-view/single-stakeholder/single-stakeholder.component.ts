import {Component, Input, OnInit} from '@angular/core';
import {Stakeholder} from "../../../core/model/domain.model";

@Component({
  selector: 'app-single-stakeholder',
  templateUrl: './single-stakeholder.component.html',
  styleUrls: ['./single-stakeholder.component.scss']
})
export class SingleStakeholderComponent implements OnInit {

  @Input()
  stakeholder: Stakeholder;

  constructor() { }

  ngOnInit() {
  }

}
