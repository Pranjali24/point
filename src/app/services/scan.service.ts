import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  constructor() { }
  private componentSource=new BehaviorSubject<string>('no');
  currentComponent=this.componentSource.asObservable()

  changeCompoent(componentName:string){
    console.log('caling***********');
      
    this.componentSource.next(componentName);

  }


}
