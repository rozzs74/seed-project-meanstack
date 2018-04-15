import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';

@Component({
	selector: 'app-message-list',
	templateUrl: 'message-list.component.html',
	styleUrls: ['message-list.component.css']
})

export class MessageListComponent implements OnInit {
	messages: Message[];

	constructor(private messageService: MessageService) { }

	ngOnInit() {
		this.messageService.getMessages()
			.subscribe(
				(messages: Message[]) => this.messages = messages
		)
	}
}