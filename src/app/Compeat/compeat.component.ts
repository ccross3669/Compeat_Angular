import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Compeat/User';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';


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

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private http: HttpClient, public dialog: MatDialog) {}
   ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
    this.userSelected = user.name;
    this.messageEvent.emit(this.userSelected);
    this.http
      .get('https://jsonplaceholder.typicode.com/posts?userId=' + this.selectedUser.id)
      .subscribe(data => {
        this.posts = data;
        console.log(this.usersPost);
      });
    console.log(user);
  }

  openDialog() {
    console.log('here');
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
