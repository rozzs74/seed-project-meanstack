import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';

@Component({
	selector: 'app-message',
	templateUrl: 'message.component.html',
	styleUrls: ['message.component.css']
})

export class MessageComponent implements OnInit {
	@Input() message: Message;
	@Output() editClicked = new EventEmitter<string>();

	constructor(private messageService: MessageService) {

	}

	ngOnInit() { }

	onEdit(message) {
		this.editClicked.emit("A new value")
	}

	onDelete(message) {
		this.messageService.deleteMessage(message);
	}
}