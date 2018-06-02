import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {
  constructor(private messageService: MessageService) { }
  message: Message

  onSubmit(form: NgForm) {
    if (this.message) {
      this.message.content = form.value.content
      this.message = null
      // this.messageService.updateMessage(this.message)
      //   .subscribe(
      //     (message: Message) => this.message = message          
      //   )
    } else {
      const message = new Message(form.value.content, 'litel')
      this.messageService.addMessage(message)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        )
    }
    form.resetForm()
  }

  onClear(form: NgForm) {
    this.message = null
    form.resetForm()
  }

  ngOnInit() {
    this.messageService.messageIsEdited.subscribe(
      (message: Message) => this.message = message
    )
  }

}