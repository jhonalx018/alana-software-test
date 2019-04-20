import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {    
    result:any=null;
    constructor(public http: HttpClient){

    }

    async makeRequest(url:string) {        
        try{
            this.result = await this.http.get(url).toPromise();
        }catch(e){
            this.result = e;
        }
        
        return this.result;
    }
}