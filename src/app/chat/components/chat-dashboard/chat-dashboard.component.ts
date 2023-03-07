import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateChannelComponent } from '../create-channel/create-channel.component';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.css']
})
export class ChatDashboardComponent implements OnInit {
  channels = [{ name: 'General', noOfUsers: 10 }];
  connections = [{ profilePix: '', name: 'Stanley' }];
  activeConnection!: Object;
  activeChannel!: Object;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (this.activeChannel) {
      console.log('active channel not empty');
    }
  }
  showCreateDialog() {
    this.dialog.open(CreateChannelComponent);
    this.activeChannel = {}
  }
  selectConnection() {
    this.activeConnection = { username: 'active connection', }
  }
}
