import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog} from '@angular/material';
import {MyDialogComponent} from './my-dialog/my-dialog.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalBasic implements OnInit {
  closeResult: string;
  dialogResult = '';
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }


}
