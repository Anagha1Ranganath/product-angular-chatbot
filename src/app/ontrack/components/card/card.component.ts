

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { DailogComponent } from './../dailog/dailog.component';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnTrackService } from '../../ontrack.service';
import { Search } from '../search/Search';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  products: Search[] = [];
productName: String;
  @Input()
  // tslint:disable-next-line:whitespace
  cart: any ;
  @Output()
   cartAddEvent = new EventEmitter<any>();

  // AddToCart() {
  //   console.log('1');
  //   this.cartAddEvent.emit(this.cart);
  // }

  dialogResult: any;
  AddToCart() {
    console.log('click event call');
    this.cartAddEvent.emit(this.cart);
  }

  openDialog(): void {
   const dialogRef = this.dialog.open(DailogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result;
    });

}

ngOnInit() {
  this.products = [
    {
      'productId': '1.',
      'productName': 'Nike'
    },
    {
      'productId': '2.',
      'productName': 'Nike'
    },
    {
      'productId': '3.',
      'productName': 'Brakley'
    }
  ];
 }
 search() {
   if (this.productName !== '') {
    this.products = this.products.filter(res => {
      return res.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
    });
   }
   // tslint:disable-next-line:one-line
   else if (this.productName === '') {
     this.ngOnInit();
   }
 }
  }
