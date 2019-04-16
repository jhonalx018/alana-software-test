import { Component } from '@angular/core';
import { Api } from '../Api/Api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  urlTest:string='';
  result:any; 
  constructor(private apiRequester:Api){

  }

  async getData(){
    this.result = null;
    this.result = await this.apiRequester.makeRequest(this.urlTest);    
  }

  cleanVars(){
    this.result = null;
    this.urlTest = '';
  }
}
