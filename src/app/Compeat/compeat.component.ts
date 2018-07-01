import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Compeat/User';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-compeat-page',
  templateUrl: './compeat.component.html',
  styleUrls: ['./compeat.component.css']
})
export class CompeatComponent implements OnInit {

  users: any = {};
  posts: any = {};
  selectedUser: any;
  usersPost: any;
  display = 'none';
  dialogResult = '';
  userSelected: string;
  dataTable: any;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private http: HttpClient, public dialog: MatDialog, private chRef: ChangeDetectorRef) {}
   ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
    this.userSelected = user.name;
    this.messageEvent.emit(this.userSelected);
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/posts?userId=' + this.selectedUser.id)
    //   .subscribe(data => {
    //     this.posts = data;
    //     console.log(this.usersPost);
    //   });
    this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.selectedUser.id)
    .subscribe((data: any[]) => {
      this.posts = data;

      // You'll have to wait that changeDetection occurs and projects data into
      // the HTML template, you can ask Angular to that for you ;-)
       this.chRef.detectChanges();
      console.log('here');
      // Now you can use jQuery DataTables :
      const table: any = $('myTable');
      this.dataTable = table.DataTable();
    });



  }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px' ,
      data: this.selectedUser
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed: ${result}');
        this.dialogResult = result;
    }

    );

  }
}
