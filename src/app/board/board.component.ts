import { Component, OnInit } from '@angular/core';
import { FetchInfoService} from '../shared/fetch-info.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  targetUrl = '';
  constructor(private fetchServ: FetchInfoService) { }

  ngOnInit() {
  }

  setTarget(event: any) {
    this.targetUrl = event.target.value;
    this.fetchServ.setTarget(this.targetUrl);
  }

}
