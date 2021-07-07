import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-scanlogin',
  templateUrl: './scanlogin.component.html',
  styleUrls: ['./scanlogin.component.css']
})
 
export class ScanloginComponent implements OnInit {
  scannerEnabled:boolean=true;
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
 constructor() {
   console.log('now check usernsame in commit chnage or not');
   console.log('hello');
    
  }

  ngOnInit() {
  }

  // onGetValue(value){
  //   console.log(value);
    
  // }

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];
  
  
  onCodeResult(value){
    console.log('oncoderesult : ',value);
    
  }

  onCamerasFound(value){
    console.log('cameraFound : ',value);
    
  }
}

