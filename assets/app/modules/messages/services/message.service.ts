import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Message } from '../models/message.model';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()
export class MessageService {

	constructor(private _http: Http) { }

	private messages: Message[] = [];

	private handleError(error: Response) {
		const err_response = error.json();
		return Observable.throw(err_response || "Server error");
	}

	addMessage(message: Message) {
		this.messages.push(message);
		let url: string = 'http://localhost:3000/message';
		const body = JSON.stringify(message);
		const headers = new Headers({
			'Content-Type': 'application/json'
		});
		return this._http.post(url, body, { headers: headers })
			.map((response: Response) => response.json())
			.catch(this.handleError)
	}

	getMessages(): Observable<any> {
		let url: string = 'http://localhost:3000/message';
		return this._http.get(url)
			.map((response: Response) => {
				const messages = response.json().obj;
				let transformedMessages: Message[] = [];
				for (let message of messages) {
					transformedMessages.push({
						content: message.content,
						username: "Royce",
						messageId: message.id,
						userId: null
					});
				}
				this.messages = transformedMessages;
				return transformedMessages;
			})
			.catch(this.handleError);
	}

	editMessage(message: Message) {

	}

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}

}