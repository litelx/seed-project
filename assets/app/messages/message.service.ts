import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import'rxjs/Rx'

import { Message } from "./message.model";
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
  private messages: Message[] = []
  messageIsEdited = new EventEmitter<Message>()

  constructor(private http: Http) {}

  addMessage(message: Message) {
    // this.messages.push(message)
    const body = JSON.stringify(message)
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('http://localhost:8082/message', body, {headers: headers})
    .map((response: Response) => {
      const result = response.json()
      const message = new Message(result.obj.content, 'litel', result.obj._id, null)
      this.messages.push(message)
      return message
      })
    .catch((error: Response) => Observable.throw(error.json()))
  }

  getMessages() {
    return this.http.get('http://localhost:8082/message')
    .map((response: Response) => {
      const messages = response.json().obj
        let tranformedMessages: Message[] = []
        for (let message of messages) {
          tranformedMessages.push(new Message(message.content, 'litel', message._id, null))
        }
        this.messages = tranformedMessages
        return tranformedMessages
      }
    )
    .catch((error: Response) => Observable.throw(error.json()));
  }
  
  editMessage(message: Message) {
    this.messageIsEdited.emit(message)
  }
  
  updateMessage(message: Message) {
    const body = JSON.stringify(message)
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.patch('http://localhost:8082/message/' + message.messageId, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
    
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1)
    return this.http.delete('http://localhost:8082/message/' + message.messageId)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
  }

}