import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';

  constructor(private socket: Socket) {
    console.log('socketId: ', socket.ioSocket)
  }
}
