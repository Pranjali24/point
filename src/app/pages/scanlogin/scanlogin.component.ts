import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanlogin',
  templateUrl: './scanlogin.component.html',
  styleUrls: ['./scanlogin.component.css']
})
 
export class ScanloginComponent implements OnInit {
  scannerEnabled:boolean=true;
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
 constructor() {
   console.log('this is testing');
   
  }

  ngOnInit() {
  }
  
}

