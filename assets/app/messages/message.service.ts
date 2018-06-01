import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import'rxjs/Rx'

import { Message } from "./message.model";
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
  private messages: Message[] = []

  constructor(private http: Http) {}
  
  addMessage(message: Message) {
    this.messages.push(message)
    const body = JSON.stringify(message)
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('http://localhost:8082/message', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
    )
  }
  
  getMessages() {
    return this.http.get('http://localhost:8082/message')
      .map((response: Response) => {
        const messages = response.json().obj
        let tranformedMessages: Message[] = []
        for (let message of messages) {
          tranformedMessages.push(new Message(message.content, message.id, 'litel', null))
        }
        this.messages = tranformedMessages
        return tranformedMessages
      }
    )
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1)
  }

}