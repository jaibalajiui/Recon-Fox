import { Component, OnInit, Input } from '@angular/core';
import {FetchInfoService} from '../shared/fetch-info.service';
import { ReconModel } from '../shared/recon-model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  sourceList: ReconModel[];
  response: any = null;
  selectedSource: ReconModel = null;
  showSpinner = false;

  constructor(private fetchServ: FetchInfoService) {}

  ngOnInit() {
     this.sourceList = this.fetchServ.getAllSource();
  }

  chooseSource(sourceItem: ReconModel) {
    this.selectedSource = sourceItem;
  }

  getReconData(){
    this.showSpinner = true;
    this.response = '';
    this.fetchServ.fetchReconInfo(this.selectedSource).subscribe(res=>{
          this.response = res;
          this.showSpinner = false;
    });
  }

}
