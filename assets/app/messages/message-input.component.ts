import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
<<<<<<< HEAD
=======
import { NgForm } from '@angular/forms';
>>>>>>> d841fab61a38b862066177af623c8eaeac971981

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  providers: [MessageService]
})

export class MessageInputComponent {
<<<<<<< HEAD
  constructor(private messageService: MessageService) {
  }

  onSave(value: string) {
      const message = new Message(value, 'litel')
      this.messageService.addMessage(message)
=======
  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    const message = new Message(form.value.content, 'litel')
    this.messageService.addMessage(message)
    form.resetForm()
>>>>>>> d841fab61a38b862066177af623c8eaeac971981
  }
}