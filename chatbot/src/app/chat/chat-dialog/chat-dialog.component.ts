import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from "rxjs";
import 'rxjs/operators';
import { scan } from 'rxjs/operators';



@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)))  

    this.messages.subscribe(next=>{
      setTimeout(() => {
        this.focusBottomContent();  
      }, 800);
      
    })
  }


  sendMessage(){
    this.chat.converse(this.formValue)
    this.formValue = '';     
  }


  focusBottomContent(){
    let messageContent= document.querySelector(".content-conversation");
    console.log(messageContent);   
    messageContent.scrollTop = messageContent.scrollHeight;
  }

}
