import { Injectable } from '@angular/core';
import { Url } from 'url';
import {reconList} from '../shared/recon-sources';
import {ReconModel} from '../shared/recon-model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchInfoService {

  target: Url;
  sourceList: ReconModel[];
  constructor(private httpClient: HttpClient) {
      this.sourceList = reconList;
   }

  setTarget(target) {
    this.target = target;
  }

  getAllSource() {
    return this.sourceList;
  }

  fetchReconInfo(sourceItem: ReconModel) {
    return this.httpClient.get(sourceItem.endpoint + this.target, {responseType: 'text'});
  }
}
