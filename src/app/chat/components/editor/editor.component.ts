import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Output() emitSend = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  bold() {
    document.execCommand("bold");
  }
  underline() {
    document.execCommand('underline')
  }
  italize() {
    document.execCommand('italic')
  }
  alignLeft() {
    // const selection = document.getSelection();
    // console.log('selection', selection);

    // if (!selection) {
    //   document.execCommand('align-left')
    // } else {
    const content = document.getElementById('text');
    content!.style!.textAlign = 'left';
    // }
  }
  alignCenter() {
    const content = document.getElementById('text');
    content!.style!.textAlign = 'center';
  }
  alignRight() {
    const content = document.getElementById('text');
    content!.style!.textAlign = 'right';
  }
  justify() {
    const content = document.getElementById('text');
    content!.style!.textAlign = 'justify';
  }
  sendMessage() {
    const message = document.getElementById('text')?.innerHTML;
    this.emitSend.emit(message);
    console.log('message to send: ', message);
  }
  orderItems() {
    const selection = document.getSelection();
    // selection. 
  }
}
