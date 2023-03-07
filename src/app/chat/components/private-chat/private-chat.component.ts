import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  bold() {
    document.execCommand("bold");
  }
  sendMessage(message: any) {
    console.log('message: ', message);
  }
}
