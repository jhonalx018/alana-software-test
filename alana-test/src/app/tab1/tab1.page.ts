import { Component , Directive, Injectable} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component'
import { Events } from 'ionic-angular';
import * as MappedName from '../helpers/MapName.json';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'], 
})


@Injectable()
export class Tab1Page {

  
  statusCardTotal:boolean = false;
  statusCardDetail:boolean = false;
  
  minValue:number;
  maxValue:number;  
  private intervalResult:Array<number> = [];
  private finalTotale:number=0;
  private detailResult:Array<number> = [];
  
  
  constructor(public modalController: ModalController, private event: Events) {    
    
    this.event.subscribe(MappedName.CLOSE_DIALOG, () => {
       modalController.dismiss();
    });

  }

  calcTotale():void{    
    
    if(this.validateValues()){
      this.getResult(this.minValue, this.maxValue);
    };

  }

  getResult(numberIn:number = 0, numberOut:number = 0):void{
    
    this.cleanVars(true);
    //Steo 1 Get interval Number
    for(let i = numberIn ; i <= numberOut; i++){
      this.intervalResult.push(i);
      this.detailResult.push(this.getDivesors(i));
      this.finalTotale += this.detailResult[this.detailResult.length - 1];      
      
    }
    
    this.statusCardTotal = true, this.statusCardDetail = true;
  }

  /*
    * @param number to calculate de divisors
    * @result sum of squares
  */

  private getDivesors(val:number=0):number{
     let sum = 0;
     for(let i = 0; i <= val ; i++){
      sum += !(val % i) ? Math.pow(i,2) : 0;
     }
     return sum;
  };

  validateValues(): boolean {
    
    if(!Number.isInteger(this.minValue) || !Number.isInteger(this.maxValue) || (this.minValue < 1 || this.maxValue < 1) || (this.minValue > this.maxValue)){
      this.presentModal();
      return false;
    }
    return true;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      backdropDismiss: true,
      component: ModalAlertComponent,
      mode: 'ios'
    });
    
    return await modal.present();
  }

  private changeClass($event, card:any):void{
    
    if(card == 1){
      this.statusCardTotal = !this.statusCardTotal;
    } else {
      this.statusCardDetail = !this.statusCardDetail;
    }
  }

  private cleanVars(param:boolean = false):void{
    
    this.statusCardTotal = false;
    this.statusCardDetail = false;

    if(!param){    
      this.minValue=0;
      this.maxValue=0;       
    }
    this.intervalResult = [];
    this.finalTotale=0;
    this.detailResult = [];
  }
}
