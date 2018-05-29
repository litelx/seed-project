import { Component } from '@angular/core';
import { MessageService } from './message.Service';
import { Message } from './message.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  providers: [MessageService]
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSave(value: string) {
    const message = new Message(value, 'litel')
    this.messageService.addMessage(message)
  }
}