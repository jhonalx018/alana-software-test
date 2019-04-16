import { Component, OnInit , Injectable} from '@angular/core';
import { Events } from 'ionic-angular';
import MappedName from '../helpers/MapName.json';


@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],
})


@Injectable()
export class ModalAlertComponent implements OnInit {  
  
  constructor(public events: Events) {    
  }

  ngOnInit() {}

  closeDialog($event){
    this.eventEmit();
  }

  eventEmit(){
    this.events.publish(MappedName.CLOSE_DIALOG);
  }

}
